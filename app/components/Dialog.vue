<template>
	<Transition name="fade">
		<div v-if="modelValue" :class="containerClass">
			<div class="fixed inset-0 bg-black/50" @click="close"></div>

			<div :class="dialogClass">
				<div class="flex flex-row justify-between">
					<h2 class="text-xl font-bold">{{title}}</h2>
					<slot name="header"/>
					<button>
						<Icon name="iconoir:xmark" class="text-2xl text-gray-500 hover:text-gray-700" @click="close"/>
					</button>
				</div>

				<div class="h-[1px] bg-gray-200 my-2"></div>
				<slot></slot>

				<slot name="footer"/>
			</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
	modelValue?: boolean,
	title?: string,
	dialogClass?: string,
	containerClass?: string
}>(), {
	dialogClass: 'bg-white rounded-xl shadow-lg z-10 p-6 max-w-md w-full',
	containerClass: 'fixed inset-0 flex items-center justify-center z-50'
})

const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void
	(e: 'close'): void
}>()

const close = () => {
	emit('update:modelValue', false)
	emit('close')
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
	transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
	opacity: 0;
}
</style>
