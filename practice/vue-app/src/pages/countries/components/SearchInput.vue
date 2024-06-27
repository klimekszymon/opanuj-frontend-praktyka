<script setup lang="ts">
const searchQuery = defineModel<string>('searchQuery');
const sortOption = defineModel<string>('sortOption');
</script>
<template>
    <div class="flex justify-between mb-4">
        <input type="text" v-model="searchQuery" placeholder="Search by name, currency, language, or capital"
            class="search-input w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mr-4">
        <select v-model="sortOption" class="p-2 border border-gray-300 rounded-md shadow-sm">
            <option value="name">Sort by Name</option>
            <option value="population">Sort by Population</option>
        </select>
    </div>
</template>