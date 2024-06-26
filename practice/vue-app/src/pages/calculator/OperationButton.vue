  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    operation: Object,
  });
  const emit = defineEmits(['execute'])
  
  const executeOperation = () => {
    emit('execute', props.operation.function);
  };
  </script>
<template>
    <button
      :aria-label="`Calculate ${operation.name}`"
      class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg transform transition duration-150 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      @click="executeOperation"
      style="cursor: pointer;"
    >
      {{ operation.symbol }}
    </button>
  </template>
  