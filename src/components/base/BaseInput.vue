<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      class="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
    />
    <div class="flex justify-end m-0 p-0">
      <p
        v-if="validType"
        :class="validInput ? 'text-green-500' : 'text-red-500'"
        class="text-sm mt-1"
      >
        {{ validInput ? validTrue : validFalse }}
      </p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },

  placeholder: {
    type: String,
    default: "text",
  },

  id: {
    type: String,
    default: "",
  },

  modelValue: {
    type: String,
  },

  label: {
    type: String,
    default: "",
  },

  validType: {
    // p태그를 사용할 것인지
    type: Boolean,
    default: false,
  },

  validInput: {
    // input값이 유효한지
    type: Boolean,
    default: false,
  },

  validTrue: {
    type: String,
    default: "사용 가능합니다.",
  },

  validFalse: {
    type: String,
    default: "사용 불가합니다.",
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>
