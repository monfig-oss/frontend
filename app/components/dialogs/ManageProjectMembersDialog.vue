<script setup lang="ts">
import { useToast } from '~/composables/useToast'
import type { Project, ProjectMember } from '~/types/project'
import Select from '../ui/Select.vue'
import Input from '../Input.vue'

const toast = useToast()
const projectMembers = ref<ProjectMember[]>([])
const form = ref({
  username: '',
  role: 'member' as 'member' | 'developer'
})
const loading = ref(false)

interface Props {
  modelValue: boolean
  project: Project | null
}

const props = defineProps<Props>()
const emit = defineEmits()

watch(() => props.modelValue, (isOpen: boolean) => {
  if (isOpen && props.project) {
    loadProjectMembers()
  }
})

const { post, get, del, patch } = useApi();

const loadProjectMembers = () => {
  projectMembers.value = []

  const response = get(`/api/v1/projects/${props.project?.id}/users`)
  response.then(res => {
    if (res.success && res.data) {
      res.data.forEach((member: ProjectMember) => {
        member.role = member.role.toLowerCase() as "member" | "developer"
      })
      projectMembers.value = res.data as ProjectMember[]
    } else {
      toast.danger(res.errors?.message || 'Failed to load project members')
    }
  }).catch(() => {
    toast.danger('Failed to load project members')
  }).finally(() => {
    loading.value = false
  })
}

const addMember = async () => {
  loading.value = true

  try {
    const response = await post(`/api/v1/projects/${props.project?.id}/users`, {
      username: form.value.username,
      role: form.value.role
    })

    if (response.success) {
      toast.success(`${form.value.username} added as ${form.value.role}`)
      form.value.username = ''
      form.value.role = 'member'
      emit('members-updated')
      loadProjectMembers()
    } else {
      toast.danger(response.errors?.message || 'Failed to add member')
    }
  } finally {
    loading.value = false
  }
}

const removeMember = async (member: ProjectMember) => {
  if (!confirm(`Remove ${member.username} from this project?`)) return
  
  loading.value = true
  
  try {
    const response = await del(`/api/v1/projects/${props.project?.id}/users/${member.username}`)

    if (response.success) {
      toast.success(`${member.username} removed from project`)
      emit('members-updated')
      loadProjectMembers()
    } else {
      toast.danger(response.errors?.message || 'Failed to remove member')
    }
  } finally {
    loading.value = false
  }
}

const changeRole = async (member: ProjectMember, newRole: 'member' | 'developer') => {
  if (member.role === newRole) return
  
  loading.value = true

  const response = await patch(`/api/v1/projects/${props.project?.id}/users/${member.username}/role`, {
    role: newRole
  })

  if (response.success) {
    toast.success(`Changed ${member.username} role to ${newRole}`)
    emit('members-updated')
    loadProjectMembers()
  } else {
    toast.danger(response.errors?.message || 'Failed to change member role')
  }

  loading.value = false
}

const closeDialog = () => {
  emit('update:modelValue', false)
}
</script>

<template>
    <Dialog 
        :model-value="props.modelValue" 
        :title="`Manage Project Members - ${props.project?.name}`" 
        @update:model-value="emit('update:modelValue', $event)"
        dialogClass="bg-white rounded-xl shadow-lg z-10 p-6 max-w-2xl w-full"
        >
      <div class="space-y-6">
        <div class="border border-gray-200 rounded-lg p-4 space-y-4">
          <h3 class="font-semibold text-gray-900">Add New Member</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Select User
              </label>
              <Input type="text" placeholder="Enter username..." v-model="form.username"
              @keydown.enter="addMember"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <Select
                v-model="form.role"
                :disabled="loading"
              >
                <option value="member">Member</option>
                <option value="developer">Developer</option>
              </select>
            </div>

            <div class="flex items-end">
              <Button 
                @click="addMember"
                :disabled="!form.username || loading"
                class="w-full"
                :loading="loading"
              >
                Add Member
              </Button>
            </div>
          </div>

          <div class="text-sm text-gray-600">
            <p><strong>Member:</strong> Can view and edit project schemas</p>
            <p><strong>Developer:</strong> Can view, edit, create and delete configs</p>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="font-semibold text-gray-900">Current Members ({{ projectMembers.length }})</h3>
          
          <div v-if="projectMembers.length === 0" class="text-center py-8 text-gray-500">
            No members added to this project yet.
          </div>

          <div v-else class="space-y-2">
            <div 
              v-for="member in projectMembers" 
              :key="member.id"
              class="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span class="text-sm font-medium text-primary">
                    {{ member.username.charAt(0).toUpperCase() }}
                  </span>
                </div>
                <div>
                  <p class="font-medium text-gray-900">{{ member.username }}</p>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <Select 
                  :value="member.role"
                  @change="changeRole(member, ($event.target as HTMLSelectElement).value as 'member' | 'developer')"
                  :disabled="loading"
                >
                  <option value="member">Member</option>
                  <option value="developer">Developer</option>
                </select>

                <Button 
                  @click="removeMember(member)"
                  variant="danger"
                  :disabled="loading"
                >
                  <Icon name="iconoir:trash" class="text-sm" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end mt-4">
            <Button variant="secondary" @click="closeDialog">
                Close
            </Button>
        </div>
      </template>
  </Dialog>
</template>
