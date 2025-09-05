<script setup>
import { ref, computed } from "vue";

import FieldEditor from "~/components/FieldEditor.vue";

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
  if (type === "array") {
    newField.itemType = "string";
    newField.itemFields = [];
  }

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
    delete field.itemType;
    delete field.itemFields;
  } else if (newType === "object") {
    field.fields = [];
    delete field.enumOptions;
    delete field.itemType;
    delete field.itemFields;
  } else if (newType === "array") {
    field.itemType = "string";
    field.itemFields = [];
    delete field.fields;
    delete field.enumOptions;
  } else {
    delete field.enumOptions;
    delete field.fields;
    delete field.itemType;
    delete field.itemFields;
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
  function serializeField(field) {
    if (field.type === "object") {
      return serialize(field.fields);
    } else if (field.type === "array") {
      if (field.itemType === "object") {
        return [serialize(field.itemFields)]; // Beispiel für Array von Objects
      } else {
        return [field.itemType];
      }
    } else if (field.type === "enum") {
      return { options: field.enumOptions };
    } else {
      return field.type;
    }
  }

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

      result[fieldName] = serializeField(field);
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

function addFieldToArrayItem(parentField) {
  parentField.itemFields.push({ id: Date.now(), name: "", type: "string" });
}

function updateItemType(field, newItemType) {
  field.itemType = newItemType;
  if (newItemType === "object") {
    field.itemFields = [];
  } else {
    delete field.itemFields;
  }
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
            <div>
              <FieldEditor
                v-for="(field, index) in fields"
                :key="field.id"
                :field="field"
                :index="index"
                :parentArray="fields"
                :fieldTypes="fieldTypes"
                :updateFieldType="updateFieldType"
                :removeField="removeField"
                :addFieldToObject="addFieldToObject"
                :updateItemType="updateItemType"
                :addFieldToArrayItem="addFieldToArrayItem"
                :addEnumOption="addEnumOption"
                :removeEnumOption="removeEnumOption"
              />
            </div>

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
