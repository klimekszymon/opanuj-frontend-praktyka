<script setup lang="ts">
import { Country } from '../types';
defineProps<{
  country: Country;
  nightMode: boolean; // Add nightMode prop
}>();
</script>
<template>
  <div :class="['country-item flex flex-col items-center p-4 rounded-lg min-h-[200px] m-2 shadow-lg', 
                nightMode ? 'bg-indigo-800 text-cyan-100 shadow-indigo-500/50' : 'bg-blue-100 text-blue-900 shadow-blue-300/50']">
    <img :src="country.flag" :alt="country.name" class="country-flag mb-2 max-h-32">
    <div class="country-info text-lg font-semibold">{{ country.name }}</div>
  </div>
</template>