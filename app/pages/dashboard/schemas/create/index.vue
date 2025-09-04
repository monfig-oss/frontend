<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth', 'manager']
})

useHead({ title: 'Create Schema' })

import { Codemirror } from 'vue-codemirror'
import { json } from '@codemirror/lang-json'
import { githubLight } from '@fsegurai/codemirror-theme-github-light'

const types = [
  { id: 'string', name: 'String', icon: 'svgo-string' },
  { id: 'number', name: 'Number', icon: 'svgo-number' },
  { id: 'boolean', name: 'Boolean', icon: 'svgo-boolean' },
  { id: 'array',  name: 'Array',  icon: 'svgo-array' },
  { id: 'object', name: 'Object', icon: 'svgo-object' },
  { id: 'null',   name: 'Null',   icon: 'svgo-null' }
]

const content = ref("{}");
const icon = ref("");

const extensions = [json(), githubLight] 

function formatJson() {
  try {
    const parsed = JSON.parse(content.value)
    content.value = JSON.stringify(parsed, null, 4)
  } catch (e) {
    console.warn('Invalid JSON:', e)
  }
}

function addField(typeId: string) {
  try {
    const parsed = JSON.parse(content.value)

    const fieldName = `${typeId}_field_${Object.keys(parsed).length + 1}`

    switch (typeId) {
      case 'string':
        parsed[fieldName] = "text"
        break
      case 'number':
        parsed[fieldName] = 0
        break
      case 'boolean':
        parsed[fieldName] = false
        break
      case 'array':
        parsed[fieldName] = []
        break
      case 'object':
        parsed[fieldName] = {}
        break
      case 'null':
        parsed[fieldName] = null
        break
    }

    content.value = JSON.stringify(parsed, null, 4)
  } catch (e) {
    console.warn("JSON invalid – can't add field")
    toast.danger('Invalid JSON: ' + e)
  }
}

const isIconPickerDialogOpen = ref(false)
const selectedIcon = ref(null)
const toast = useToast();
const submit = () => {
  try {
    const parsed = JSON.parse(content.value)
    const fixed: Record<string, any> = {}

    Object.entries(parsed).forEach(([key]) => {
      if (key.startsWith("string")) fixed[key] = "text"
      else if (key.startsWith("number")) fixed[key] = 0
      else if (key.startsWith("boolean")) fixed[key] = false
      else if (key.startsWith("array")) fixed[key] = []
      else if (key.startsWith("object")) fixed[key] = {}
      else if (key.startsWith("null")) fixed[key] = null
      else fixed[key] = parsed[key] // falls jemand custom keys baut
    })

    content.value = JSON.stringify(fixed, null, 4)
    console.log("Submitting schema:", content.value)
    console.log("Selected icon:", selectedIcon.value)
  } catch (e) {
    toast.danger("Invalid JSON: " + e)
  }
}


</script>

<template>
    <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold text-gray-800">Create Schema</h1>
        <Button @click="submit">
            <Icon name="iconoir:save-floppy-disk" class="text-2xl mr-2" />
            Save Schema
        </Button>
    </div>

    <div class="p-4 bg-gray-50 w-full rounded-lg mb-6 border border-gray-200 flex flex-col gap-2">
        <h1 class="font-semibold text-xl">
            Schema Settings
        </h1>
        <Input placeholder="Schema Name" class="w-full" />

        <Button @click="isIconPickerDialogOpen = true" variant="secondary">
            <Icon v-if="selectedIcon" :name="selectedIcon" class="text-2xl" />
            <span v-else>Select Icon</span>
        </Button>

        <DialogsIconPickerDialog v-model="isIconPickerDialogOpen" @select="selectedIcon = $event" />
    </div>

    <div class="flex flex-row gap-8 h-full">
        <div class="w-full border-gray-200 bg-gray-50 border rounded-lg shadow-sm h-full p-4">
            <h1 class="font-semibold text-lg">Add Field</h1>
            <div class="flex flex-col gap-4 mt-4">
                <div
                    v-for="type in types"
                    :key="type.id"
                    @click="addField(type.id)"
                    class="bg-white flex shadow-sm border border-gray-200 flex-row gap-3 py-3 px-4 rounded-lg items-center cursor-pointer select-none hover:bg-gray-50/50 transition-all"
                >
                    <component :is="type.icon" class="text-2xl text-primary mt-0.5" />
                        <div class="font-medium text-gray-700">
                            {{ type.name }}
                        </div>
                </div>
            </div>
        </div>

        <div class="w-full border-gray-200 bg-gray-50 border rounded-lg shadow-sm h-full p-4">
            <h1 class="font-semibold text-lg">Config Editor</h1>

            <div class="mt-4">
                <ClientOnly>
                    <Codemirror
                        v-model="content"
                        :extensions="extensions"
                        :autofocus="true"
                        :indent-with-tab="true"
                        :tab-size="4"
                        style="height: 100%; font-family: monospace !important;"
                        class="rounded-lg overflow-hidden bg-white border border-gray-200"
                    />
                </ClientOnly>
            </div>
        </div>
    </div>
</template>
