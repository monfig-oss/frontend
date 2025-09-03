<template>
  <Dialog v-model="isOpen" title="Select Icon" dialogClass="bg-white rounded-xl shadow-lg z-10 p-6 max-w-2xl w-full">
    <div class="flex flex-col gap-2">
      <Input
        v-model="search"
        placeholder="Search icon..."
      />

      <div class="grid grid-cols-5 gap-2 overflow-auto max-h-[400px]">
        <button
          v-for="iconName in visibleIcons"
          :key="iconName"
          @click="selectIcon(iconName)"
          class="flex flex-col items-center justify-center p-2 border border-gray-200 rounded hover:bg-gray-100 w-full"
        >
          <Icon :name="iconName" class="text-2xl" />
          <span class="text-xs truncate w-24 text-center">{{ iconName.split(':')[1] }}</span>
        </button>
      </div>

      <div v-if="filteredIcons.length > visibleIcons.length" class="text-center mt-2">
        <Button variant="secondary" @click="loadMore" class="w-full">
            Load more...
        </Button>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import { icons as iconoirIcons } from '@iconify-json/iconoir/icons.json'

const allIcons = Object.keys(iconoirIcons).map(name => `iconoir:${name}`)

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'select', icon: string): void
}>()

const isOpen = ref(props.modelValue)
watch(() => props.modelValue, val => (isOpen.value = val))
watch(isOpen, val => emit('update:modelValue', val))

const search = ref('')
const filteredIcons = computed(() => {
  if (!search.value) return allIcons
  return allIcons.filter(i => i.toLowerCase().includes(search.value.toLowerCase()))
})

const CHUNK_SIZE = 60
const visibleCount = ref(CHUNK_SIZE)
const visibleIcons = computed(() => filteredIcons.value.slice(0, visibleCount.value))
const loadMore = () => {
  visibleCount.value += CHUNK_SIZE
}

const selectIcon = (icon: string) => {
  emit('select', icon)
  isOpen.value = false
}
</script>