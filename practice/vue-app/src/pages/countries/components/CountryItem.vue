  <script setup lang="ts">
  import { Country } from '../types';
defineProps<{
    country: Country;
  }>();
  </script>
<template>
    <div class="country-item flex items-center p-4 bg-white rounded-lg shadow-lg">
      <img :src="country.flag" :alt="country.name" class="country-flag w-16 h-10 mr-4">
      <div class="country-info text-lg font-semibold">{{ country.name }}</div>
    </div>
  </template>
  