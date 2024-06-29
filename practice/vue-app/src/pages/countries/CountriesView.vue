<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useFetchCountries } from './composables/useFetchCountries';
import { useSortingFiltering } from './composables/useSortingFiltering';
import { useGuessingGame } from './composables/useGuessingGame';

// components
import CountryList from './components/CountryList.vue';
import SearchInput from './components/SearchInput.vue';
import DarkButton from './../../components/DarkModeButton.vue';

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

// dark mode
const darkmode = ref<boolean>(false);
const onDarkSwitch = () => {
    darkmode.value = !darkmode.value;
    // document.body.classList.toggle('dark');
};

const toggleDarkMode = () => {
    darkmode.value = !darkmode.value;
    document.body.classList.toggle('dark');
};

// Fetch countries on mounted
onMounted(fetchCountries);
</script>
<template>
    <div class="search-page p-4" :class="{ 'dark:bg-gray-900': darkmode, 'bg-blue-50': !darkmode }">
        <button @click="toggleDarkMode"
            :class="{ 'bg-gray-800 text-white': darkmode, 'bg-white text-gray-800': !darkmode }"
            class="flex items-center justify-center mt-5 py-2 px-4 rounded-full shadow-lg font-semibold text-lg transition-colors duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-blue-500 to-teal-400">
            <span v-if="darkmode">
                <!-- Sun Icon for Day -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-brightness-high"
                    viewBox="0 0 16 16" width="16" height="16">
                    <path d="M12.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z" />
                    <path
                        d="M8 0a.5.5 0 0 1 .5.5V3a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 8 0zM1.343 2.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707L1.343 3.05a.5.5 0 0 1 0-.707zM0 8a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H.5A.5.5 0 0 1 0 8zm13.5-.5h2.5a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1 0-1zm-9.657 4.657a.5.5 0 0 1 .707 0l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0zm9.193 0a.5.5 0 0 1 0 .707l-1.414-1.414a.5.5 0 1 1 .707-.707l1.414 1.414zM8 13a.5.5 0 0 1-.5.5v2.5a.5.5 0 0 1 1 0v-2.5A.5.5 0 0 1 8 13zm0-12a7 7 0 1 0 0 14A7 7 0 0 0 8 1z" />
                </svg>
            </span>
            <span v-else>
                <!-- Moon Icon for Night -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16"
                    width="16" height="16">
                    <path
                        d="M6.354 1.654a7 7 0 1 0 8.138 11.792A7 7 0 0 0 6.354 1.655zM7 13.5a6.5 6.5 0 0 1 6.5-6.5A6.988 6.988 0 0 0 7 13.5z" />
                </svg>
            </span>
            Nighty mode
        </button>
        <div class="flex flex-col items-center justify-center" style="min-height: 05vh;">

            <h1
                class="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 pb-12">
                {{ mode === 'view' ? 'Country Flags Overview' : 'Identify the Flag' }}
            </h1>
            <button @click="toggleMode"
                class=" mt-4 bg-gradient-to-r from-pink-500 to-pink-300 text-white font-bold py-2 px-8 rounded-full hover:from-pink-700 hover:to-pink-500 transition duration-300 ease-in-out transform hover:scale-105">
                {{ mode === 'view' ? 'Switch to Flag Guessing Mode' : 'Switch to Flags Overview' }}
            </button>

        </div>
        <!-- <DarkButton @dark-switch="onDarkSwitch" /> -->
        <div v-if="mode === 'view'" class="transition-opacity duration-500 ease-in-out">
            <div class="search-page p-4">
                <SearchInput v-model:search-query="searchQuery" v-model:sort-option="sortOption" :darkmode />
                <CountryList :countries="filteredCountries" :night-mode="darkmode" />
            </div>
        </div>
        <div v-else
            class="guessing-mode mt-8 bg-coolGray-100 dark:bg-coolGray-800 p-4 rounded-lg shadow transition-opacity duration-500 ease-in-out">
            <div class="flex flex-col items-center justify-center">
                <transition name="slide-left" mode="out-in">
                    <img v-if="currentGuessCountry" :src="currentGuessCountry?.flag" :alt="currentGuessCountry?.name"
                        :key="currentGuessCountry?.name" class="w-96 h-60 mb-4">
                </transition>
                <!-- <img :src="currentGuessCountry?.flag" alt="Guess the country" class="w-96 h-60 mb-4"> -->
                <!-- Adjusted input width to match the flag width -->
                <input type="text" v-model="userGuess" placeholder="Enter country name"
                    class="form-input mt-1 block w-96 px-3 py-2 border border-coolGray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-coolGray-700 dark:border-coolGray-600 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400">
                <div class="flex space-x-4 mt-4">
                    <!-- Applied gradient effect to buttons -->
                    <button @click="checkGuess"
                        class="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        Check
                    </button>
                    <button @click="nextGuess"
                        class="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        Next Flag
                    </button>
                </div>
                <!-- Feedback Message with Transition -->
                <div class="mt-4 text-lg font-medium transition-all duration-300 ease-in-out transform" :class="{
        'text-green-500': guessFeedback === 'Correct!',
        'text-red-500': guessFeedback === 'Wrong, try again!',
        'dark:text-green-400': darkmode && guessFeedback === 'Correct!',
        'dark:text-red-400': darkmode && guessFeedback === 'Wrong, try again!',
        'opacity-0': !guessFeedback,
        'opacity-100 translate-y-2': guessFeedback
    }">
                    {{ guessFeedback }}
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
    transition: transform 0.5s ease;
}

.slide-left-enter,
.slide-left-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
</style>