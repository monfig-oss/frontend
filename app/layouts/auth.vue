<script setup lang="ts">
const {app} = useAppConfig();
</script>
<template>
	<div class="flex items-center justify-center min-h-screen bg-gray-50">
		<div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200 w-full max-w-md">
			<div class="text-center text-2xl font-semibold mb-6 flex flex-col">
				Login
				<span class="text-gray-500 text-sm">Welcome to {{app.name}}</span>
			</div>
			<div>
				<slot/>
			</div>
		</div>
	</div>
</template>