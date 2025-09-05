<script setup>
import { ref, computed } from "vue";

// Schema state
const schemaName = ref("My Schema");
const schemaDescription = ref("");
const fields = ref([]);

definePageMeta({
  layout: "dashboard",
});

// Field types with icons
const fieldTypes = [
  { id: "string", label: "String", icon: "svgo-string" },
  { id: "number", label: "Number", icon: "svgo-number" },
  { id: "boolean", label: "Boolean", icon: "svgo-boolean" },
  { id: "date", label: "Date", icon: "svgo-date" },
  { id: "enum", label: "Enum", icon: "svgo-enum" },
  { id: "array", label: "Array", icon: "svgo-array" },
  { id: "object", label: "Object", icon: "svgo-object" }, // NEU
];

import { Codemirror } from "vue-codemirror";
import { json } from "@codemirror/lang-json";
import { githubLight } from "@fsegurai/codemirror-theme-github-light";

// Field operations
function addField(type = "string") {
  const newField = { id: Date.now(), name: "", type };

  if (type === "enum") newField.enumOptions = ["Option 1", "Option 2"];
  if (type === "object") newField.fields = [];

  fields.value.push(newField);
}

function removeField(index, array = fields.value) {
  array.splice(index, 1);
}

function updateFieldType(field, newType) {
  field.type = newType;
  if (newType === "enum") {
    field.enumOptions = ["Option 1", "Option 2"];
    delete field.fields;
  } else if (newType === "object") {
    field.fields = [];
    delete field.enumOptions;
  } else {
    delete field.enumOptions;
    delete field.fields;
  }
}

function addEnumOption(field) {
  field.enumOptions.push(`Option ${field.enumOptions.length + 1}`);
}

function removeEnumOption(field, index) {
  field.enumOptions.splice(index, 1);
}

function clearAllFields() {
  fields.value = [];
}

function exportSchema() {
  const schema = {
    name: schemaName.value,
    fields: fields.value,
  };

  schema.fields = schema.fields.map(({ id, ...field }) => field);

  const blob = new Blob([JSON.stringify(schema, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${schemaName.value || "schema"}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

const jsonPreview = computed(() => {
  function serialize(fields) {
    const result = {};
    const nameCounts = {}; 

    fields.forEach(field => {
      let defaultName = `unnamed_${field.type || "field"}`;
      let fieldName = field.name || defaultName;

      if (nameCounts[fieldName] != null) {
        nameCounts[fieldName] += 1;
        fieldName = `${fieldName}_${nameCounts[fieldName]}`;
      } else {
        nameCounts[fieldName] = 0;
      }

      if (field.type === "object") {
        result[fieldName] = serialize(field.fields);
      } else if (field.type === "enum") {
        result[fieldName] = { options: field.enumOptions };
      } else {
        result[fieldName] = field.type;
      }
    });

    return result;
  }


  return JSON.stringify(
    {
      name: schemaName.value || "Untitled Schema",
      fields: serialize(fields.value),
    },
    null,
    2
  );
});

function addFieldToObject(parentField) {
  parentField.fields.push({ id: Date.now(), name: "", type: "string" });
}


const extensions = [json(), githubLight];
</script>

<template>
  <div class="flex h-full bg-gray-50 rounded-xl">
    <!-- Sidebar -->
    <aside class="w-72 border-r border-gray-200 p-4 flex flex-col">
      <h2 class="text-sm font-semibold text-gray-500 uppercase mb-4">
        Schema Information
      </h2>
      <div class="mb-6">
        <label class="block text-xs font-medium text-gray-600 mb-1"
          >Schema Name</label
        >
        <Input
          v-model="schemaName"
          type="text"
          placeholder="Enter schema name"
          class="w-full"
        />
      </div>

      <h3 class="text-xs font-semibold text-gray-500 uppercase mb-2">
        Field Types
      </h3>
      <div class="grid grid-cols-2 gap-2 mb-6">
        <Button
          v-for="type in fieldTypes"
          :key="type.id"
          class="text-md"
          @click="addField(type.id)"
        >
          <span>{{ type.label }}</span>
        </Button>
      </div>

      <h3 class="text-xs font-semibold text-gray-500 uppercase mb-2">
        Quick Actions
      </h3>
      <div class="flex flex-col space-y-2 mt-2">
        <Button> Create </Button>
        <Button @click="clearAllFields" variant="danger" class="w-full">
          Clear All Fields
        </Button>
        <Button @click="exportSchema" variant="secondary" class="w-full">
          Export JSON
        </Button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6 h-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 space-y-4">
        <!-- Schema Fields -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-800">Schema Fields</h2>
            <span class="text-sm text-gray-500"
              >{{ fields.length }} fields</span
            >
          </div>

          <div class="space-y-3 overflow-y-auto overflow-x-hidden">
            <TransitionGroup name="field" tag="div">
              <div
                v-for="(field, index) in fields"
                :key="field.id"
                class="group rounded-lg border border-gray-200 bg-white p-4 hover:shadow transition-all mb-2"
              >
                <div class="flex items-start gap-3">
                  <!-- Field content -->
                  <div class="flex-1 space-y-3">
                    <div class="flex items-center gap-3">
                      <Input
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
                      <label class="text-xs font-medium text-gray-600"
                        >Enum Values</label
                      >
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
                            <svg
                              class="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                        <button
                          @click="addEnumOption(field)"
                          class="flex items-center gap-1 text-xs text-primary hover:text-primary/80"
                        >
                          <svg
                            class="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                          Add Option
                        </button>
                      </div>
                    </div>

                    <!-- Object fields -->
                    <div v-if="field.type === 'object'" class="mt-4 pl-4 border-l-2 border-gray-200 bg-gray-50 rounded-md p-3">
                      <label class="text-xs font-medium text-gray-600 mb-2 block">Object Fields</label>
                      <div class="space-y-2">
                        <div v-for="(subField, subIndex) in field.fields" :key="subField.id" class="flex items-center gap-2">
                          <Input v-model="subField.name" type="text" placeholder="Field name"
                            class="flex-1  px-3 py-1.5 text-sm"/>
                          <select v-model="subField.type" @change="updateFieldType(subField, $event.target.value)"
                            class="rounded-md border border-gray-300  px-3 py-1.5 text-sm focus:ring-1 focus:ring-primary focus:border-primary">
                            <option v-for="type in fieldTypes" :key="type.id" :value="type.id">{{ type.label }}</option>
                          </select>
                           <button
                            @click="removeField(subIndex, field.fields)"
                            class="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-red-500"
                          >
                            <svg
                              class="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
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
                    @click="removeField(index)"
                    class="mt-2 rounded-md p-1.5 text-gray-400 opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-500 transition-all"
                  >
                    <svg
                      class="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </TransitionGroup>

            <!-- Empty state -->
            <div
              v-if="fields.length === 0"
              class="flex flex-col items-center justify-center py-12 text-center"
            >
              <div class="rounded-full bg-gray-100 p-3 mb-4">
                <svg
                  class="h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 class="text-sm font-medium text-gray-800 mb-2">
                No fields yet
              </h3>
              <p class="text-xs text-gray-500 mb-4">
                Start building your schema by adding fields from the sidebar.
              </p>
            </div>
          </div>
        </div>

        <!-- JSON Preview -->
        <div
          class="flex flex-col h-full space-y-4 border-l border-gray-200 pl-6"
        >
          <h2 class="text-lg font-semibold text-gray-800">JSON Preview</h2>
          <ClientOnly>
            <Codemirror
              v-model="jsonPreview"
              :extensions="extensions"
              :read-only="true"
              class="flex-1 rounded-lg overflow-hidden bg-white border border-gray-200 h-full"
              style="font-family: monospace !important"
            />
          </ClientOnly>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Transition animations */
.field-enter-active,
.field-leave-active {
  transition: all 0.3s ease;
}

.field-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.9);
}

.field-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.field-leave-to {
  opacity: 0;
  transform: translateX(10px) scale(0.9);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.2);
}

</style>
