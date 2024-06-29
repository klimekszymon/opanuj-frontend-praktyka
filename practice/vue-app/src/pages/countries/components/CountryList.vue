<script setup lang="ts">
import CountryItem from './CountryItem.vue';
import { Country } from '../types';

// Define props with nightMode
defineProps<{
  countries: Country[];
  nightMode: boolean;
}>();
</script>

<template>
  <!-- Bind class based on nightMode -->
  <div :class="['grid-container grid sm:grid-cols-4 md:grid-cols-4 2 lg:grid-cols-8 xl:grid-cols-10 gap-4', { 'night-mode': nightMode }]">
    <!-- Pass nightMode to CountryItem -->
    <CountryItem v-for="country in countries" :key="country.name" :country="country" :nightMode="nightMode" />
  </div>
</template>