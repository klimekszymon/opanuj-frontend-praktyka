<script setup lang="ts">
const searchQuery = defineModel<string>('searchQuery');
const sortOption = defineModel<string>('sortOption');
    const props = defineProps({
  darkmode: Boolean
});
</script>
<template>
    <div :class="{'dark:bg-gray-800': darkmode, 'bg-white': !darkmode}" class="flex justify-between mb-4">
        <input type="text" v-model="searchQuery" placeholder="Search by name, currency, language, or capital"
            :class="`search-input w-full p-2 border rounded-md shadow-sm mr-4 ${darkmode ? 'border-gray-600 bg-gray-700 text-white focus:ring-blue-400 focus:border-blue-400' : 'border-gray-300 bg-white text-gray-800 focus:ring-blue-500 focus:border-blue-500'}`">
        <select v-model="sortOption" :class="`${darkmode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-800'}`" class="p-2 rounded-md shadow-sm">
            <option value="name">Sort by Name</option>
            <option value="population">Sort by Population</option>
        </select>
    </div>
</template>