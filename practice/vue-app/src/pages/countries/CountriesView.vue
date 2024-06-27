<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useFetchCountries } from './composables/useFetchCountries';
import { useSortingFiltering } from './composables/useSortingFiltering';
import { useGuessingGame } from './composables/useGuessingGame';

// components
import CountryList from './components/CountryList.vue';
// Reactive states specific to this component
const mode = ref<string>('view'); // 'view' for viewing mode, 'guess' for guessing mode

// Using composables
const { countries, fetchCountries } = useFetchCountries();
const { searchQuery, sortOption, filteredCountries } = useSortingFiltering(countries);
const { currentGuessCountry, userGuess, guessFeedback, selectRandomCountry, checkGuess, nextGuess } = useGuessingGame(countries);

const toggleMode = () => {
    if (mode.value === 'view') {
        mode.value = 'guess';
        selectRandomCountry()
    } else {
        mode.value = 'view';
    }
    guessFeedback.value = ''; // Reset feedback
};
// Fetch countries on mounted
onMounted(fetchCountries);
</script>
<template>
    <div class="search-page p-4">
        <button @click="toggleMode">{{ mode === 'view' ? 'Switch to Guessing Mode' : 'Switch to Viewing Mode'
            }}</button>
        <div v-if="mode === 'view'">

            <div class="search-page p-4">
                <div class="flex justify-between mb-4">
                    <input type="text" v-model="searchQuery"
                        placeholder="Search by name, currency, language, or capital"
                        class="search-input w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mr-4">
                    <select v-model="sortOption" class="p-2 border border-gray-300 rounded-md shadow-sm">
                        <option value="name">Sort by Name</option>
                        <option value="population">Sort by Population</option>
                    </select>
                </div>
                <CountryList :countries="filteredCountries" />
            </div>
        </div>
        <div v-else class="guessing-mode mt-8">
            <div class="flex flex-col items-center justify-center">
                <img :src="currentGuessCountry?.flag" alt="Guess the country" class="w-32 h-20 mb-4">
                <input type="text" v-model="userGuess" placeholder="Enter country name"
                    class="form-input mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <div class="flex space-x-4 mt-4">
                    <button @click="checkGuess"
                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Check
                    </button>
                    <button @click="nextGuess"
                        class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                        Next Flag
                    </button>
                </div>
                <div class="mt-4 text-lg font-medium"
                    :class="{ 'text-green-500': guessFeedback === 'Correct!', 'text-red-500': guessFeedback === 'Wrong, try again!' }">
                    {{ guessFeedback }}
                </div>
            </div>
        </div>
    </div>
</template>