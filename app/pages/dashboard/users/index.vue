<script setup lang="ts">
import type { User } from "~/types/user"
import type { ApiResponse } from "~/types/api"
import CreateUserDialog from "~/components/dialogs/CreateUserDialog.vue"

definePageMeta({
	layout: 'dashboard',
	middleware: ["auth", "admin"]
})

useHead({
	title: "Users"
})

const toast = useToast();

const { get, del, put } = useApi()

const users = ref<User[]>([])
const meta = ref<any>({ page: 1, pageSize: 10, total: 0, totalPages: 0 })
const loading = ref(false)

const fetchUsers = async (page = 1, pageSize = 10) => {
	loading.value = true
	const res = await get<User[]>(`/api/v1/admin/users?page=${page}&pageSize=${pageSize}`)
	if (res.success && res.data) {
		users.value = res.data
		meta.value = res.meta
	} else {
		users.value = []
		meta.value = { page, pageSize, total: 0, totalPages: 0 }
	}
	loading.value = false
}

onMounted(() => {
	fetchUsers(1, 10)
})

const columns = [
	{ key: "username", label: "Username", type: "text" as "text" },
	{
		key: "globalRole",
		label: "Role",
		type: "select" as "select",
		editable: true,
		options: [
			{ value: 'admin', label: 'admin' },
			{ value: 'manager', label: 'manager' },
			{ value: 'user', label: 'user' }
		],
		formatter: (value: any) => Array.isArray(value) ? value[0] : value
	}
]

const actions = [
	{ key: "edit", label: "Edit", variant: "secondary" as "secondary" },
	{ key: "delete", label: "Delete", variant: "danger" as "danger" }
]

const handleAction = async (actionKey: string, item: User, index: number, oldUser?: User) => {
	if (actionKey === "delete") {
		if (confirm(`Are you sure you want to delete: '${item.username}'`)) {
			const response = await del(`/api/v1/admin/users/${item.username}`)
			if (response.success) {
				toast.success(`User '${item.username}' deleted successfully`)
				fetchUsers(meta.value.page, meta.value.pageSize)
			} else {
				if (response.errors?.message)
					toast.danger(response.errors.message)
				else
					toast.danger(`Failed to delete user '${item.username}'`)
			}
		}
	}
	if (actionKey === "edit-save") {
		const response = await put<ApiResponse<User>>(`/api/v1/admin/users/${item.username}`, {
			...item,
			globalRole: item.globalRole
		})

		if (response.success) {
			toast.success(`User '${item.username}' updated successfully`)
			fetchUsers(meta.value.page, meta.value.pageSize)
		} else {

			if (oldUser) {
				users.value[index] = oldUser;
			}

			if (response.errors?.message)
				toast.danger(response.errors.message)
			else
				toast.danger(`Failed to update user '${item.username}'`)
		}
	}
}

const handleUpdate = (data: User[]) => {
	users.value = [...data]
}

const isCreateUserDialogOpen = ref(false);

const refresh = () => {
	fetchUsers(meta.value.page, meta.value.pageSize);
	toast.normal("Users refreshed");
}
</script>

<template>
	<div class="flex justify-between items-center mb-8">
		<h1 class="text-2xl font-bold text-gray-800">Manage Users</h1>
		<Button @click="isCreateUserDialogOpen = true">
			<Icon name="iconoir:plus" class="text-2xl mr-2"/>
			Create User
		</Button>
	</div>

	<div class="space-y-6">
		<DataTable
			:columns="columns"
			:data="users"
			:actions="actions"
			:loading="loading"
			:page="meta.page"
			:page-size="meta.pageSize"
			:total="meta.total"
			@action="handleAction"
			@update="handleUpdate"
			:total-pages="meta.totalPages"
			@page-change="(p: any) => fetchUsers(p, meta.pageSize)"
		>
			<template #header>
				<div class="flex justify-between items-center">
					<h3 class="text-lg font-semibold text-gray-900 w-full">Registered Users</h3>
					<Button @click="refresh" variant="secondary">
						<Icon name="iconoir:refresh-circle-solid" class="text-xl" />
					</Button>
				</div>
			</template>
			<template #empty>
				No users found.
			</template>
		</DataTable>
	</div>

	<CreateUserDialog 
		v-model="isCreateUserDialogOpen" 
		@user-created="fetchUsers(meta.page, meta.pageSize)"
	/>
</template>
<style scoped></style>