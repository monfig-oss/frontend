<script setup lang="ts">
import { useProjectStore } from '~/stores/project.store';
import type { Project } from '~/types/project';
const projectStore = useProjectStore();

const projects = ref<Project[]>([]);
const isProjectDropdownOpen = ref(false);

const { get } = useApi();

const initProjects = async () => {
    try {
        const res = await get('/api/v1/projects');
        if (res.success) {
            projects.value = res.data;
        } else {
            console.error('Failed to fetch projects:', res.errors?.message);
        }
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

onMounted(() => {
    initProjects();
});

const emit = defineEmits(['projectSelected']);

const selectProject = (project: Project) => {
    projectStore.setSelectedProject(project)
    isProjectDropdownOpen.value = false;
    emit('projectSelected', project)
}

</script>
<template>
    <div class="relative">
        <button
            @click="isProjectDropdownOpen = !isProjectDropdownOpen"
            class="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-md hover:bg-gray-100 border border-gray-200"
        >
            <span class="truncate">{{ projectStore.selectedProject?.name }}</span>
            <Icon
                name="iconoir:nav-arrow-down"
                class="text-lg ml-2 transition-transform"
                :class="{ 'rotate-180': isProjectDropdownOpen }"
            />
        </button>

        <div
            v-if="isProjectDropdownOpen"
            class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto"
        >
            <button
                v-for="project in projects"
                :key="project.id"
                @click="selectProject(project)"
                class="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 text-left"
                :class="{ 'bg-green-50 text-primary': projectStore.selectedProject?.id === project.id }"
            >
                <span class="truncate">{{ project.name }}</span>
            </button>
        </div>
    </div>
</template>