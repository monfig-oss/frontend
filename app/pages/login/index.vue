<script setup lang="ts">
import Button from "~/components/Button.vue";
import { ref } from 'vue'

useHead({
	title: 'Login'
})

definePageMeta({
	layout: 'auth',
	middleware: 'guest'
})

const error = ref('');

const form = reactive({
	username: '',
	password: ''
})

const isLoading = ref(false)

const { login } = useUser();

const submit = async () => {
	isLoading.value = true
	error.value = ''

	const result = await login(form.username, form.password);
console.log(result)
	if (result.success) {
		await navigateTo('/dashboard')
	} else {
		error.value = result.errors?.message || 'An unknown error occurred.'
	}

	isLoading.value = false
};
</script>

<template>
	<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-1.5">
				<p class="text-sm text-black/60">Username</p>
				<input class="custom-input"
					   type="text"
					   v-model="form.username"
					   placeholder="admin"
					   @keyup.enter="submit"
				/>
			</div>

			<div class="flex flex-col gap-1.5">
				<p class="text-sm text-black/60">Password</p>
				<input class="custom-input"
					   type="password"
					   v-model="form.password"
					   placeholder="**********"
					   @keyup.enter="submit"
				/>
			</div>

			<p v-if="error.length > 0" class="text-red-800 text-sm mt-2">
				Error: {{ error }}
			</p>

			<Button @click="submit" :disabled="isLoading"

			>
				<p v-if="!isLoading">Login</p>
				<div v-if="isLoading" class="flex flex-row gap-2">
					<svgo-loading class="text-xl stroke-white mt-0.5"/>
					<p>Loading...</p>
				</div>
			</Button>
	</div>
</template>