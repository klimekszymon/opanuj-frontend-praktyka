  <script setup lang="ts">
  import CountryItem from './CountryItem.vue';
  import { Country } from '../types';
defineProps<{
    countries: Country[];
  }>();
  </script>
<template>
    <div class="countries-list mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CountryItem v-for="country in countries" :key="country.name" :country="country" />
    </div>
  </template>
  