<script setup lang="ts">
const props = defineProps({
	disabled: {
		type: Boolean,
		default: false
	},
	variant: {
		type: String as () => 'primary' | 'secondary' | 'danger',
		default: 'primary'
	},
	loading: {
		type: Boolean,
		default: false
	}
})

const variants = {
	primary: 'bg-primary hover:bg-secondary disabled:bg-secondary/60 text-white',
	secondary: 'bg-gray-200 hover:bg-gray-300 disabled:bg-gray-300/60 text-gray-800',
	danger: 'bg-red-700 hover:bg-red-800 text-white',
	primaryOutline: 'border border-primary text-primary hover:bg-primary hover:text-white'
}

const getButtonClass = () => {
	return variants[props.variant] || variants.primary
}

import { computed } from 'vue'

const isDisabled = computed(() => props.disabled || props.loading)
</script>

<template>
	<button :class="getButtonClass()" class="px-4 py-2 disabled:hover:cursor-not-allowed  duration-300 transition-all cursor-pointer font-medium rounded-md shadow-sm flex items-center section-clickable" :disabled="isDisabled">
		<div v-if="loading" class="flex flex-row gap-2">
			<svgo-loading class="text-xl stroke-white mt-0.5"/>
			<p>Loading...</p>
		</div>
		<slot v-if="!loading"/>
	</button>
</template>

<style scoped>

</style>