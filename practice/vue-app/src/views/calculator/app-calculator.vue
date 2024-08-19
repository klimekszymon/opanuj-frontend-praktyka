<script setup>
import { ref } from 'vue';
import { operations } from './useMathOperations';
import OperationButton from './OperationButton.vue';
const firstNumber = ref(0);
const secondNumber = ref(0);
const result = ref(0);

const handleOperation = (operationFunc) => {
  result.value = operationFunc(firstNumber.value, secondNumber.value);
};
</script>
<template>
    <div class="max-w-md mx-auto mt-10 pt-12">
      <div class="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          class="rounded-md shadow-md p-4"
          v-model.number="firstNumber"
        />
        <input
          type="number"
          class="rounded-md shadow-md p-4"
          v-model.number="secondNumber"
        />
      </div>
      <div class="grid grid-cols-4 gap-x-4 my-4">
        <OperationButton
          v-for="operation in operations"
          :key="operation.name"
          :operation="operation"
          @execute="handleOperation"
        />
      </div>
      <div class="text-center text-lg font-semibold p-4 bg-gray-100 rounded shadow">
        Result: {{ result }}
      </div>
    </div>
  </template>
  
