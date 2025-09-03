<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useToast } from '~/composables/useToast';
import { useApi } from '~/composables/useApi';
import type { ApiResponse } from "~/types/api"
import type { Project } from "~/types/project"
import CreateProjectDialog from "~/components/dialogs/CreateProjectDialog.vue"
import ManageProjectMembersDialog from "~/components/dialogs/ManageProjectMembersDialog.vue"

definePageMeta({
	layout: 'dashboard',
	middleware: ["auth", "manager"]
})

useHead({
	title: "Projects"
})

const toast = useToast();
const { get, del, put } = useApi();
const projects = ref<Project[]>([])
const meta = ref<any>({ page: 1, pageSize: 10, total: 0, totalPages: 0 })
const loading = ref(false)
const isCreateProjectDialogOpen = ref(false);
const isMembersDialogOpen = ref(false)
const selectedProject = ref<Project | null>(null)

const fetchProjects = async (page = 1, pageSize = 10) => {
	loading.value = true
	const res = await get<Project[]>(`/api/v1/projects/admin?page=${page}&pageSize=${pageSize}`)
	if (res.success && res.data) {
		projects.value = res.data
		meta.value = res.meta
	} else {
		projects.value = []
		meta.value = { page, pageSize, total: 0, totalPages: 0 }
	}
	loading.value = false
}

onMounted(() => {
	fetchProjects(1, 10)
})

const columns = [
	{ key: "id", label: "ID", type: "text" as "text" },
	{ key: "projectIdentifier", label: "Project Identifier", type: "text" as "text", editable: true },
	{ key: "name", label: "Project Name", type: "text" as "text", editable: true },
]

const actions = [
	{ key: "members", label: "Members", variant: "secondary" as "secondary" },
	{ key: "edit", label: "Edit", variant: "secondary" as "secondary" },
	{ key: "delete", label: "Delete", variant: "danger" as "danger" }
]

const handleAction = async (actionKey: string, item: Project, index: number, oldProject?: Project) => {
	if (actionKey === "members") {
		selectedProject.value = item
		isMembersDialogOpen.value = true
		return
	}
	
	if (actionKey === "delete") {
		if (confirm(`Are you sure you want to delete: '${item.name}'`)) {
			const response = await del(`/api/v1/projects/${item.id}`)
			if (response.success) {
				toast.success(`Project '${item.name}' deleted successfully`)
				fetchProjects(meta.value.page, meta.value.pageSize)
			} else {
				if (response.errors?.message)
					toast.danger(response.errors.message)
				else
					toast.danger(`Failed to delete project '${item.name}'`)
			}
		}
	}
	if (actionKey === "edit-save") {
		const response = await put<ApiResponse<Project>>(`/api/v1/projects/${item.id}`, {
			...item
		})

		if (response.success) {
			toast.success(`Project '${item.name}' updated successfully`)
			fetchProjects(meta.value.page, meta.value.pageSize)
		} else {
			if (oldProject) {
				projects.value[index] = oldProject;
			}

			if (response.errors?.message)
				toast.danger(response.errors.message)
			else
				toast.danger(`Failed to update project '${item.name}'`)
		}
	}
}

const handleUpdate = (data: Project[]) => {
	projects.value = [...data]
}

const refresh = () => {
	fetchProjects(meta.value.page, meta.value.pageSize);
	toast.normal("Projects refreshed");
}

const handleMembersUpdated = () => {
	fetchProjects(meta.value.page, meta.value.pageSize)
}
</script>

<template>
	<div class="flex justify-between items-center mb-8">
		<h1 class="text-2xl font-bold text-gray-800">Manage Projects</h1>
		<Button @click="isCreateProjectDialogOpen = true">
			<Icon name="iconoir:plus" class="text-2xl mr-2"/>
			Create Project
		</Button>
	</div>

	<div class="space-y-6">
		<DataTable
			:columns="columns"
			:data="projects"
			:actions="actions"
			:loading="loading"
			:page="meta.page"
			:page-size="meta.pageSize"
			:total="meta.total"
			@action="handleAction"
			@update="handleUpdate"
			:total-pages="meta.totalPages"
			@page-change="(p: any) => fetchProjects(p, meta.pageSize)"
		>
			<template #header>
				<div class="flex justify-between items-center">
					<h3 class="text-lg font-semibold text-gray-900 w-full">Created Projects</h3>
					<Button @click="refresh" variant="secondary">
						<Icon name="iconoir:refresh-circle-solid" class="text-xl" />
					</Button>
				</div>
			</template>
			<template #empty>
				No projects found.
			</template>
		</DataTable>
	</div>

	<CreateProjectDialog 
		v-model="isCreateProjectDialogOpen" 
		@project-created="fetchProjects(meta.value.page, meta.value.pageSize)"
	/>

	<ManageProjectMembersDialog
		v-model="isMembersDialogOpen"
		:project="selectedProject"
		@members-updated="handleMembersUpdated"
	/>
</template>
<style scoped></style>
