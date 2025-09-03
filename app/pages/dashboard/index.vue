<script setup lang="ts">
import DashboardHeader from "~/components/DashboardHeader.vue";
import DashboardSidebar from "~/components/DashboardSidebar.vue";

useHead({
	title: 'Dashboard'
})

definePageMeta({
	middleware: 'auth'
})

const showDialog = ref(false)
</script>

<template>
	<div class="flex flex-col min-h-screen w-full bg-white">
		<DashboardHeader/>
		<div class="flex flex-1">
			<DashboardSidebar/>
			<div class="flex-1 p-6">
				<div class="p-8">
					<div class="flex justify-between items-center mb-8">
						<div>
							<h1 class="text-2xl font-bold text-gray-800">motd</h1>
						</div>
						<div class="flex space-x-4">
							<Button variant="danger">
								<Icon name="iconoir:trash-solid" class="text-lg mr-2"/>
								Delete Schema
							</Button>
							<Button>
								<Icon name="iconoir:check-circle-solid" class="text-lg mr-2"/>
								Save Changes
							</Button>
						</div>


					</div>
					<div class="space-y-6">
						<div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
							<label class="block text-sm font-medium text-gray-700 mb-2">
								server_name
							</label>
							<Input placeholder="Server Name"/>
						</div>

						<div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
							<div class="flex items-center justify-between">
								<label class="block text-sm font-medium text-gray-700">
									show_player_count
								</label>
								<div class="relative inline-block w-10 align-middle select-none">
									<input type="checkbox" name="toggle" id="showPlayerCount" class="sr-only" checked/>
									<label for="showPlayerCount" class="block overflow-hidden h-6 rounded-full bg-primary cursor-pointer">
										<span class="dot block h-4 w-4 mt-1 ml-1 bg-white rounded-full transition-transform duration-300 ease-in-out transform translate-x-4"></span>
									</label>
								</div>
							</div>
						</div>

						<div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
							<label class="block text-sm font-medium text-gray-700 mb-2">max_players</label>
							<Input type="number" value="100"/>
						</div>

						<div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
							<label class="block text-sm font-medium text-gray-700 mb-4">motd_lines</label>
							<div class="space-y-3">
								<div class="flex items-center space-x-2">
									<Input type="text" value="&6Welcome to &lMy Server"/>
									<button class="p-2 text-gray-500 hover:text-gray-700">
										<Icon name="iconoir:trash-solid" class="text-lg mt-2"/>
									</button>
								</div>
								<div class="flex items-center space-x-2">
									<Input type="text" value="&aSurvival &7| &cPvP &7| &bSkyBlock"/>
									<button class="p-2 text-gray-500 hover:text-gray-700">
										<Icon name="iconoir:trash-solid" class="text-lg mt-2"/>
									</button>
								</div>
								<button class="flex items-center text-sm font-medium text-primary hover:text-secondary">
									<Icon name="iconoir:plus" class="text-lg mr-1"/>
									Add Line
								</button>
							</div>
						</div>

						<div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
							<label class="block text-sm font-medium text-gray-700 mb-4">great_enum</label>

							<Dropdown
								:options="[
								{ label: 'Option 1', value: 'option1' },
								{ label: 'Option 2', value: 'option2' },
								{ label: 'Option 3', value: 'option3' }
							]"
								placeholder="Select an option"
							/>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>