<script setup lang="ts">
import NavigationDrawer from "@/components/internal/NavigationDrawer.vue";

</script>

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