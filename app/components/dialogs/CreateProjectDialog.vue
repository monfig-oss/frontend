<script setup lang="ts">
import { ref } from 'vue';
import Input from '../Input.vue';

const toast = useToast();
const emit = defineEmits();

const loading = ref(false);
const projectName = ref('');
const projectIdentifier = ref('');


const { post } = useApi();

const createProject = async () => {
    loading.value = true;

    try {
        const response = await post('/api/v1/projects', {
            projectName: projectName.value,
            projectIdentifier: projectIdentifier.value
        });

        if (response.success) {
            toast.success(`Project '${projectName.value}' created successfully`);
            emit('update:modelValue', false);
            emit('project-created');
            projectName.value = '';
            projectIdentifier.value = '';
        } else {
            if (response.errors?.message)
                toast.danger(response.errors.message);
            else
                toast.danger(`Failed to create project '${projectName.value}'`);
        }
    } finally {
        loading.value = false;
    }
}

watch(projectName, (name) => {
    projectIdentifier.value = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
});
</script>

<template>
    <Dialog title="Create Project">
        <div class="my-4 flex flex-col gap-4">
            <div class="flex flex-col gap-1">
                <label for="projectName">Project Name</label>
                <Input type="text" id="projectName" v-model="projectName" placeholder="Enter project name" />
            </div>
            <div class="flex flex-col gap-1">
                <label for="projectIdentifier">Project Identifier</label>
                <Input type="text" id="projectIdentifier" v-model="projectIdentifier" :value="projectIdentifier" />
            </div>
        </div>

      
        <template #footer>
            <div class="flex justify-end space-x-4 mt-4">
                <Button :loading="loading" type="primary" @click="createProject">
                    Create Project
                </Button>
            </div>
        </template>
    </Dialog>
</template>

<style scoped>
</style>