<script setup lang="ts">
const githubUrl = 'https://github.com/monfig-oss'
</script>

<template>
	<div class="flex flex-col items-center justify-center h-full w-full text-center p-6 bg-gray-50">
		<div class="max-w-lg">
			<h1 class="text-3xl font-bold text-gray-900 mb-4">
				Welcome to Monfig Dashboard
			</h1>
			<p class="text-gray-700 mb-6">
				This is a Monfig setup. Everything is ready for you to start building your configuration management system.
			</p>
			<a
				:href="githubUrl"
				target="_blank"
				class="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-secondary transition-colors duration-300"
			>
				Check it out on GitHub
				<Icon name="iconoir:arrow-right" class="ml-2 text-lg" />
			</a>
			<div class="mt-6">
				<a
					href="/login"
					class="inline-flex items-center px-5 py-3 bg-gray-700 text-white rounded-md font-medium hover:bg-gray-800 transition-colors duration-300"
				>
					Login to Dashboard
					<Icon name="iconoir:arrow-right" class="ml-2 text-lg" />
				</a>
			</div>
		</div>
	</div>
</template>

<style scoped>
a:hover span {
	transform: translateX(4px);
	transition: transform 0.2s;
}
</style>
