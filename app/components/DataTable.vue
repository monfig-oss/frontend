<template>
	<div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
		<!-- Header -->
		<div v-if="title || $slots.header" class="px-6 py-4 border-b border-gray-200 bg-gray-50">
			<slot name="header">
				<h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
			</slot>
		</div>

		<!-- Table -->
		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
				<tr>
					<th
						v-for="column in columns"
						:key="column.key"
						class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
						@click="sortBy(column.key)"
					>
						<div class="flex items-center space-x-1">
							<span>{{ column.label }}</span>
							<svg
								v-if="sortColumn === column.key"
								class="w-4 h-4"
								:class="sortDirection === 'asc' ? 'transform rotate-180' : ''"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</th>
					<th
						v-if="actions.length > 0"
						class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
						Actions
					</th>
				</tr>
				</thead>

				<tbody class="bg-white divide-y divide-gray-200">
				<tr
					v-for="(item, index) in props.data"
					:key="getItemKey(item, index)"
					class="hover:bg-gray-50 transition-colors duration-150"
				>
					<td
						v-for="column in columns"
						:key="column.key"
						class="px-6 py-4 whitespace-nowrap"
					>
						<slot :name="`cell-${column.key}`" :item="item" :value="item[column.key]" :index="index">
							<div v-if="column.editable && editingRow === index" class="flex items-center">
								<input
									v-if="column.type === 'text'"
									v-model="item[column.key]"
									class="border border-gray-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									@blur="stopEditing"
									@keyup.enter="stopEditing"
								/>
								<select
									v-else-if="column.type === 'select'"
									v-model="item[column.key]"
									class="border border-gray-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									@blur="stopEditing"
								>
									<option v-for="option in column.options" :key="option.value" :value="option.value">
										{{ option.label }}
									</option>
								</select>
							</div>
							<div v-else class="text-sm text-gray-900">
                  <span v-if="column.type === 'badge'" :class="getBadgeClass(item[column.key])">
                    {{ item[column.key] }}
                  </span>
								<span v-else>
                    {{ column.formatter ? column.formatter(item[column.key], item) : item[column.key] }}
                  </span>
							</div>
						</slot>
					</td>

					<td v-if="actions.length > 0" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
						<div class="flex items-center justify-end space-x-2">
							<Button
								v-for="action in actions"
								:key="action.key"
								@click="handleAction(action.key, item, index)"
								:variant="action.variant || 'secondary'"
								class="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors duration-150"
							>
								{{ action.label }}
							</Button>
						</div>
					</td>
				</tr>

				<tr v-if="props.data.length === 0">
					<td :colspan="columns.length + (actions.length > 0 ? 1 : 0)" class="px-6 py-8 text-center text-gray-500">
						<slot name="empty">
							No data available.
						</slot>
					</td>
				</tr>
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div v-if="paginationEnabled" class="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
			<div class="text-sm text-gray-600">
				Page {{ currentPage }} of {{ totalPages }}
			</div>
			<div class="flex space-x-2">
				<Button @click="prevPage" :disabled="currentPage === 1" variant="secondary">Previous</Button>
				<Button @click="nextPage" :disabled="currentPage === totalPages" variant="secondary">Next</Button>
			</div>
		</div>

		<div v-if="$slots.footer" class="px-6 py-4 border-t border-gray-200 bg-gray-50">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Column {
	key: string
	label: string
	editable?: boolean
	type?: 'text' | 'select' | 'badge'
	options?: { value: any; label: string }[]
	formatter?: (value: any, item?: any) => any
}

interface Action {
	key: string
	label: string
	variant?: 'primary' | 'secondary' | 'danger'
}

interface Props {
	title?: string
	columns: Column[]
	data: any[]
	actions?: Action[]
	keyField?: string
	page?: number
	pageSize?: number
	total?: number 
}

const props = withDefaults(defineProps<Props>(), {
	actions: () => [],
	keyField: 'id',
	page: 1,
	pageSize: 10,
	total: 0
})

const emit = defineEmits<{
	action: [actionKey: string, item: any, index: number, oldItem?: any]
	update: [data: any[]]
	pageChange: [page: number]
}>()

const sortColumn = ref<string>('')
const sortDirection = ref<'asc' | 'desc'>('asc')
const editingRow = ref<number | null>(null)
const currentPage = ref(props.page)

const totalPages = computed(() => Math.ceil((props.total || props.data.length) / props.pageSize))
const paginationEnabled = computed(() => totalPages.value > 1)

const paginatedData = computed(() => props.data)

const sortedData = computed(() => {
	if (!sortColumn.value) return props.data
	return [...props.data].sort((a, b) => {
		const aVal = a[sortColumn.value]
		const bVal = b[sortColumn.value]
		if (aVal < bVal) return sortDirection.value === 'asc' ? -1 : 1
		if (aVal > bVal) return sortDirection.value === 'asc' ? 1 : -1
		return 0
	})
})

const sortBy = (column: string) => {
	if (sortColumn.value === column) {
		sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
	} else {
		sortColumn.value = column
		sortDirection.value = 'asc'
	}
}

const originalRow = ref<any | null>(null)

const handleAction = (actionKey: string, item: any, index: number) => {
	if (actionKey === 'edit') {
		originalRow.value = JSON.parse(JSON.stringify(item))
		editingRow.value = index
	} else {
		emit('action', actionKey, item, index)
	}
}

const stopEditing = () => {
	if (editingRow.value !== null) {
		const index = editingRow.value
		const newItem = props.data[index]
		const oldItem = originalRow.value

		emit('action', 'edit-save', newItem, index, oldItem)
		emit('update', props.data)
	}

	editingRow.value = null
	originalRow.value = null
}

const getItemKey = (item: any, index: number) => item[props.keyField] || index

const getBadgeClass = (value: string) => {
	const baseClass = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
	switch (value.toLowerCase()) {
		case 'admin': return `${baseClass} bg-red-100 text-red-800`
		case 'editor': return `${baseClass} bg-yellow-100 text-yellow-800`
		case 'user': return `${baseClass} bg-green-100 text-green-800`
		default: return `${baseClass} bg-gray-100 text-gray-800`
	}
}

const nextPage = () => {
	if (currentPage.value < totalPages.value) {
		currentPage.value++
		emit('pageChange', currentPage.value)
	}
}

const prevPage = () => {
	if (currentPage.value > 1) {
		currentPage.value--
		emit('pageChange', currentPage.value)
	}
}
</script>
