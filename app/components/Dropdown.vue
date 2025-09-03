<script setup lang="ts">
interface DropdownOption {
	value: string
	label: string
}

defineProps({
	modelValue: {
		type: String,
		default: ''
	},
	options: {
		type: Array as () => DropdownOption[],
		required: true
	},
	placeholder: {
		type: String,
		default: ''
	},
	error: {
		type: Boolean,
		default: false
	},
	disabled: {
		type: Boolean,
		default: false
	},
	className: {
		type: String,
		default: ''
	}
})

const emits = defineEmits(['update:modelValue'])
</script>

<template>
	<div class="relative">
		<select
			:class="[
        'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm appearance-none bg-background text-foreground',
        'focus:outline-none focus:ring-primary focus:border-primary',
        'disabled:bg-muted disabled:cursor-not-allowed disabled:opacity-50',
        error ? 'border-destructive' : 'border-input',
        className
      ]"
			:disabled="disabled"
			:value="modelValue"
			@change="$emit('update:modelValue', $event.target && ($event.target as HTMLSelectElement).value)"
		>
			<option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
			<option
				v-for="option in options"
				:key="option.value"
				:value="option.value"
			>
				{{ option.label }}
			</option>
		</select>
		<div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
			<Icon name="iconoir:nav-arrow-down" class="h-4 w-4 text-muted-foreground" />
		</div>
	</div>
</template>

<style scoped>

</style>
