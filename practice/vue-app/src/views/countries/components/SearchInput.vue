<script setup lang="ts">
const searchQuery = defineModel<string>('searchQuery');
const sortOption = defineModel<string>('sortOption');
defineProps({
  darkmode: Boolean
});
</script>
<template>
    <div :class="{'dark:bg-gray-800': darkmode, 'bg-white': !darkmode}" class="flex justify-between mb-4">
        <InputText v-model="searchQuery" :darkmode="darkmode" />
        <select v-model="sortOption" :class="`${darkmode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-800'}`" class="p-2 rounded-md shadow-sm">
            <option value="name">Sortuj po nazwie</option>
            <option value="population">Sortuj po polulacji</option>
        </select>
    </div>
</template>