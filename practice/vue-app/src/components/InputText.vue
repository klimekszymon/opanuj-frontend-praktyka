<script setup lang="ts">
const userGuess = defineModel();

defineProps<{
  darkmode: boolean;
}>();
</script>

<template>
  <input
    type="text"
    v-model="userGuess"
    placeholder="Enter country name"
    :class="`search-input w-full p-4 border rounded-md shadow-sm mr-4 text-lg font-bold h-14${
      darkmode
        ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400 focus:border-blue-400'
        : 'border-gray-300 bg-white text-gray-800 focus:ring-blue-500 focus:border-blue-500'
    }`"
  />
</template>
