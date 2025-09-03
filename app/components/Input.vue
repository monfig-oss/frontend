<script setup lang="ts">
const props = defineProps({
	modelValue: {
		type: String,
		default: ''
	},
	placeholder: {
		type: String,
		default: ''
	},
	type: {
		type: String,
		default: 'text'
	},
	disabled: {
		type: Boolean,
		default: false
	}
})

const emits = defineEmits(['update:modelValue'])
</script>

<template>
	<input
		:type="type"
		:placeholder="placeholder"
		:disabled="disabled"
		:value="modelValue"
		@input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
		class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary disabled:bg-gray-100 disabled:cursor-not-allowed"
	/>
</template>

<style scoped>
</style>
