<script setup lang="ts">
const fakeProjects = [
	{
		id: '1',
		name: 'E-Commerce Platform'
	},
	{
		id: '2',
		name: 'Blog System'
	},
	{
		id: '3',
		name: 'User Management'
	},
	{
		id: '4',
		name: 'Analytics Dashboard'
	}
]

const selectedProject = ref('');
const isProjectDropdownOpen = ref(false);

const selectedProjectName = computed(() => {
	return fakeProjects.find(p => p.id === selectedProject.value)?.name || 'Select Project';
});

const selectProject = (projectId: string) => {
	selectedProject.value = projectId;
	isProjectDropdownOpen.value = false;
}
</script>
<template>
    <div class="relative">
        <button
            @click="isProjectDropdownOpen = !isProjectDropdownOpen"
            class="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-md hover:bg-gray-100 border border-gray-200"
        >
            <span class="truncate">{{ selectedProjectName }}</span>
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
                v-for="project in fakeProjects"
                :key="project.id"
                @click="selectProject(project.id)"
                class="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 text-left"
                :class="{ 'bg-green-50 text-primary': selectedProject === project.id }"
            >
                <span class="truncate">{{ project.name }}</span>
            </button>
        </div>
    </div>
</template>