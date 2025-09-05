<template>
  <div class="group rounded-lg border border-gray-200 bg-white p-4 hover:shadow transition-all mb-2">
    <div class="flex items-start gap-3">
      <div class="flex-1 space-y-3">
        <div class="flex items-center gap-3">
          <Input
            v-if="field.name !== undefined"
            v-model="field.name"
            type="text"
            placeholder="Field name"
            class="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
          />
          <select
            v-model="field.type"
            @change="updateFieldType(field, $event.target.value)"
            class="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
          >
            <option
              v-for="type in fieldTypes"
              :key="type.id"
              :value="type.id"
            >
              {{ type.label }}
            </option>
          </select>
        </div>

        <!-- Enum options -->
        <div v-if="field.type === 'enum'" class="space-y-2">
          <label class="text-xs font-medium text-gray-600">Enum Values</label>
          <div class="space-y-2">
            <div
              v-for="(option, optIndex) in field.enumOptions"
              :key="optIndex"
              class="flex items-center gap-2"
            >
              <Input
                v-model="field.enumOptions[optIndex]"
                type="text"
                placeholder="Option value"
                class="flex-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
              /> 
              <button
                @click="removeEnumOption(field, optIndex)"
                class="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-red-500"
              >
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <button
              @click="addEnumOption(field)"
              class="flex items-center gap-1 text-xs text-primary hover:text-primary/80"
            >
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              Add Option
            </button>
          </div>
        </div>

        <!-- Array items -->
        <div v-if="field.type === 'array'" class="mt-4 pl-4 border-l-2 border-gray-200 bg-gray-50 rounded-md p-3">
          <label class="text-xs font-medium text-gray-600 mb-2 block">Array Item Type</label>
          <select
            v-model="field.itemType"
            @change="updateItemType(field, $event.target.value)"
            class="mb-4 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
          >
            <option
              v-for="type in fieldTypes"
              :key="type.id"
              :value="type.id"
            >
              {{ type.label }}
            </option>
          </select>

          <!-- Item Template for Objects -->
          <div v-if="field.itemType === 'object'" class="mt-4">
            <label class="text-xs font-medium text-gray-600 mb-2 block">Item Template (Object Fields)</label>
            <div class="space-y-2 pl-4 border-l-2 border-blue-200 bg-blue-50 rounded-md p-3">
              <FieldEditor
                v-for="(itemField, itemIndex) in field.itemFields"
                :key="itemField.id"
                :field="itemField"
                :index="itemIndex"
                :parentArray="field.itemFields"
                :fieldTypes="fieldTypes"
                :updateFieldType="updateFieldType"
                :removeField="removeField"
                :addFieldToObject="addFieldToArrayItem"
                :updateItemType="updateItemType"
                :addFieldToArrayItem="addFieldToArrayItem"
                :addEnumOption="addEnumOption"
                :removeEnumOption="removeEnumOption"
              />
              <button @click="addFieldToArrayItem(field)" class="flex items-center gap-1 text-xs text-primary hover:text-primary/80">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                Add Field to Item Template
              </button>
            </div>
          </div>
        </div>

        <!-- Object fields -->
        <div v-if="field.type === 'object'" class="mt-4 pl-4 border-l-2 border-gray-200 bg-gray-50 rounded-md p-3">
          <label class="text-xs font-medium text-gray-600 mb-2 block">Object Fields</label>
          <div class="space-y-2">
            <FieldEditor
              v-for="(subField, subIndex) in field.fields"
              :key="subField.id"
              :field="subField"
              :index="subIndex"
              :parentArray="field.fields"
              :fieldTypes="fieldTypes"
              :updateFieldType="updateFieldType"
              :removeField="removeField"
              :addFieldToObject="addFieldToObject"
              :updateItemType="updateItemType"
              :addFieldToArrayItem="addFieldToArrayItem"
              :addEnumOption="addEnumOption"
              :removeEnumOption="removeEnumOption"
            />
            <button @click="addFieldToObject(field)" class="flex items-center gap-1 text-xs text-primary hover:text-primary/80">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              Add Field
            </button>
          </div>
        </div>
      </div>

      <!-- Remove button -->
      <button
        @click="removeField(index, parentArray)"
        class="mt-2 rounded-md p-1.5 text-gray-400 opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-500 transition-all"
      >
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  field: Object,
  index: Number,
  parentArray: Array,
  fieldTypes: Array,
  updateFieldType: Function,
  removeField: Function,
  addFieldToObject: Function,
  updateItemType: Function,
  addFieldToArrayItem: Function,
  addEnumOption: Function,
  removeEnumOption: Function,
});

defineOptions({
  name: 'FieldEditor'
});
</script>
