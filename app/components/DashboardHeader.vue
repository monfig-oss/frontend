<script setup lang="ts">
const {app} = useAppConfig();
import { useUser } from '~/composables/useUser'
const { user, logout } = useUser()

const redirectToHome = () => {
	const router = useRouter();
	router.push("/dashboard")
}

</script>

<template>
	<div class="w-full bg-white">
		<div class="flex flex-row justify-between items-center px-6 py-4 border-b border-gray-200">
			<div class="flex items-center space-x-2 cursor-pointer" @click="redirectToHome">
				<div class="w-8 h-8 bg-primary rounded flex items-center justify-center">
					<svgo-cube class="text-lg mt-0.5 text-white"/>
				</div>
				<p class="font-semibold text-lg">
					{{app.name}}
				</p>
			</div>
			<div class="flex items-center space-x-2">
				<p
					class="text-sm text-gray-700 font-medium"
				>
					{{ user?.username }}
				</p>
				<p v-if="user && user.globalRole != null"
				   class="text-xs text-gray-500 italic">
					({{ user.globalRole }})
				</p>
				<button
					@click="logout()"
					class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold cursor-pointer hover:bg-gray-200/60 transition-all">
					<Icon name="iconoir:log-out" class="text-lg"/>
				</button>
			</div>
		</div>
	</div>
</template>