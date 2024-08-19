<script setup lang="ts">
import NavigationDrawer from "@/components/internal/NavigationDrawer.vue";

import ValidatorView from './pages/validator/ValidatorView.vue'
import CalculatorView from './pages/calculator/CalculatorView.vue'
import CountriesView from './pages/countries/CountriesView.vue'
</script>

<!-- <ValidatorView /> -->
<!-- <CalculatorView /> 
 <template>
 <CountriesView />
 </template>-->
<template>
  <NavigationDrawer>
    <RouterView />
  </NavigationDrawer>
</template>
<style>
.viewport-center {
  @apply flex items-center justify-center h-screen p-4;
}
</style>