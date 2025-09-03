<script setup lang="ts">
import { ref, computed } from 'vue';
const {user} = useUser();

const fakeSchemas = [
	{
		id: '1',
		name: 'motd',
		icon: 'iconoir:message-solid'
	},
	{
		id: '2',
		name: 'maintenance',
		icon: 'iconoir:flask-solid'
	},
	{
		id: '3',
		name: 'branding',
		icon: 'iconoir:label-solid'
	}
]

const activeSchema = ref('1');

const redirectTo = (link: string) => {
	const router = useRouter();
	router.push("/dashboard" + link);
}

const isAdmin = computed(() => {
	return user.value?.globalRole === 'admin';
})

const isManager = computed(() => {
	return user.value?.globalRole === 'manager';
})

const extraButtons = [
	{
		id: 'addSchema',
		label: 'Add Schema',
		icon: 'iconoir:plus',
		roles: ["admin", "manager"],
		action: () => redirectTo('/schemas/create')
	},
	{
		id: 'manageUsers',
		label: 'Manage Users',
		icon: 'iconoir:user',
		roles: ["admin"],
		action: () => redirectTo('/users')
	},
	{
		id: 'manageProjects',
		label: 'Manage Projects',
		icon: 'iconoir:suitcase',
		roles: ["admin", "manager"],
		action: () => redirectTo('/projects')
	}
]

</script>

<template>
	<div class="bg-white w-64 border-r border-gray-200 flex flex-col">
		<div class=" flex flex-col">
			<div class="px-4 py-3 border-b border-gray-200">
				<ProjectSwitcher />
			</div>

			<div class="px-4 mb-2 mt-4">
				<p class="text-xs font-medium text-gray-500 uppercase tracking-wider">
					Schemas
				</p>
			</div>
			<nav v-if="selectedProject">
				<span v-for="schema in fakeSchemas" :key="schema.id"
					  class="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 cursor-pointer"
					  :class="{'text-primary bg-green-50 border-l-2 border-primary': activeSchema === schema.id}"

				>
					<Icon :name="schema.icon" class="text-xl text-center mr-3"/>
					<span>
						{{ schema.name }}
					</span>
				</span>
			</nav>
			<div class="px-4 py-3 mt-auto border-t border-gray-200 flex flex-col space-y-2">
				<template v-for="button in extraButtons" :key="button.id">
					<button v-if="button.roles.includes(user?.globalRole ?? '')" class="cursor-pointer flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200" @click="button.action">
						<Icon :name="button.icon" class="text-lg mr-2"/>
						<span>
							{{ button.label }}
						</span>
					</button>
				</template>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
