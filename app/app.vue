<script lang="ts" setup>
const {app} = useAppConfig();
useHead({
	title: app.title,
	titleTemplate: `%s - ${app.title}`,
})
</script>

<template>
	<Html class="h-screen w-full">
	<Body class="bg-gray-50 text-black h-screen w-full">
	<NuxtLayout class="h-screen">
		<NuxtPage/>
	</NuxtLayout>
	</Body>
	</Html>
</template>
