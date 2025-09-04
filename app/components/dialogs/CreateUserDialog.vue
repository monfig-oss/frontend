<script setup lang="ts">
import { ref } from 'vue';
import Input from '../Input.vue';
import Select from '../ui/Select.vue';

const toast = useToast();
const emit = defineEmits();

const loading = ref(false);
const username = ref('');
const globalRole = ref('user');
const isCreated = ref({
    success: false,
    password: 'Demo123'
})

const { post } = useApi();

const createUser = async () => {
    loading.value = true;

    try {
        if (!/^[a-zA-Z0-9]+$/.test(username.value)) {
            toast.danger('Username can only contain alphanumeric characters.');
            loading.value = false;
            return;
        }

        const response = await post('/api/v1/admin/users/create', {
            username: username.value,
            globalRole: globalRole.value
        })

        if (response.success) {
            isCreated.value = {
                success: true,
                password: response.meta?.password
            }

            toast.success('User created successfully!');
            emit('user-created')
        } else {
            toast.danger(response.errors?.message)
        }
    } finally {
        loading.value = false;
    }
}

const copyPassword = () => {
    toast.success('Password copied to clipboard');
    navigator.clipboard.writeText(isCreated.value.password);
}
</script>

<template>
    <Dialog title="Create User">
        <div class="my-4 flex flex-col gap-4">
            <div class="flex flex-col gap-1">
                <label for="username">Username</label>
                <Input type="text" id="username" v-model="username" placeholder="Enter username" />
            </div>
            <div class="flex flex-col gap-1">
                <label for="globalRole">Role</label>
                <Select id="globalRole" v-model="globalRole">
                    <option value="user">User</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                </Select>
            </div>
            <div class="text-sm text-gray-600">
                <p><strong>User:</strong> No extra permissions, only if assigned to a project</p>
                <p><strong>Manager:</strong> Can view, edit, create and delete projects</p>
                <p><strong>Admin:</strong> Full access to all projects and users</p>
          </div>
        </div>

        <div v-if="isCreated.success" class="p-4 text-center bg-primary/10 rounded text-black/70">
            <p>Generated Password:</p>
            <pre class="py-2 bg-secondary/20 rounded">{{ isCreated.password }}</pre>
        </div>
      
        <template #footer>
            <div class="flex justify-end space-x-4 mt-4">
                <Button variant="secondary" v-if="isCreated.success" @click="copyPassword">
                    Copy
                </Button>
                <Button :loading="loading" type="primary" @click="createUser">
                    Create User
                </Button>
            </div>
        </template>
    </Dialog>
</template>

<style scoped>
</style>