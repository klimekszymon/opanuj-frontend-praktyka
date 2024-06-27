<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';


const countries = ref([]);
const filteredCountries = ref([]);
const searchQuery = ref('');
const sortOption = ref('name');
const mode = ref('view'); // 'view' for viewing mode, 'guess' for guessing mode
const currentGuessCountry = ref(null);
const userGuess = ref('');
const guessFeedback = ref('');

const fetchCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    countries.value = response.data.map(country => ({
      name: country.name.common,
      flag: country.flags.svg,
      currencies: Object.keys(country.currencies || {}),
      languages: Object.values(country.languages || {}),
      capital: country.capital ? country.capital[0] : 'N/A',
      population: country.population,
    }));
    sortCountries();
  } catch (error) {
    console.error('Failed to fetch countries:', error);
  }
};

const filterCountries = () => {
  sortCountries(); // Apply sorting after filtering
};

const sortCountries = () => {
  let sorted = [...countries.value];
  if (sortOption.value === 'name') {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption.value === 'population') {
    sorted.sort((a, b) => a.population - b.population);
  }
  if (!searchQuery.value) {
    filteredCountries.value = sorted;
  } else {
    const query = searchQuery.value.toLowerCase();
    filteredCountries.value = sorted.filter(country => 
      country.name.toLowerCase().includes(query) ||
      country.currencies.some(currency => currency.toLowerCase().includes(query)) ||
      country.languages.some(language => language.toLowerCase().includes(query)) ||
      (country.capital && country.capital.toLowerCase().includes(query))
    );
  }
};

const selectRandomCountry = () => {
  const randomIndex = Math.floor(Math.random() * countries.value.length);
  currentGuessCountry.value = countries.value[randomIndex];
};

const checkGuess = () => {
  if (userGuess.value.toLowerCase() === currentGuessCountry.value.name.toLowerCase()) {
    guessFeedback.value = 'Correct!';
  } else {
    guessFeedback.value = 'Wrong, try again!';
  }
};

const toggleMode = () => {
  if (mode.value === 'view') {
    mode.value = 'guess';
    selectRandomCountry();
  } else {
    mode.value = 'view';
  }
  guessFeedback.value = ''; // Reset feedback
};

watch(sortOption, sortCountries);
onMounted(fetchCountries);
</script>
<template>
  <div class="search-page p-4">
    <button @click="toggleMode">{{ mode === 'view' ? 'Switch to Guessing Mode' : 'Switch to Viewing Mode' }}</button>
    <div v-if="mode === 'view'">

    <div class="search-page p-4">
      <div class="flex justify-between mb-4">
        <input type="text" v-model="searchQuery" placeholder="Search by name, currency, language, or capital" @input="filterCountries"
          class="search-input w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mr-4">
        <select v-model="sortOption" class="p-2 border border-gray-300 rounded-md shadow-sm">
          <option value="name">Sort by Name</option>
          <option value="population">Sort by Population</option>
        </select>
      </div>
      <div class="countries-list mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="country in filteredCountries" :key="country.name" class="country-item flex items-center p-4 bg-white rounded-lg shadow-lg">
          <img :src="country.flag" :alt="country.name" class="country-flag w-16 h-10 mr-4">
          <div class="country-info text-lg font-semibold">{{ country.name }}</div>
        </div>
      </div>
    </div>
</div>
<div v-else class="guessing-mode mt-8">
      <div class="flex flex-col items-center justify-center">
        <img :src="currentGuessCountry?.flag" alt="Guess the country" class="w-32 h-20 mb-4">
        <input type="text" v-model="userGuess" placeholder="Enter country name" class="form-input mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <div class="flex space-x-4 mt-4">
          <button @click="checkGuess" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Check
          </button>
          <button @click="selectRandomCountry" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Next Flag
          </button>
        </div>
        <div class="mt-4 text-lg font-medium" :class="{'text-green-500': guessFeedback === 'Correct!', 'text-red-500': guessFeedback === 'Wrong, try again!'}">
          {{ guessFeedback }}
        </div>
      </div>
    </div>
  </div>
  </template>