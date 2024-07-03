<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useFetchCountries } from './composables/useFetchCountries';
import { useSortingFiltering } from './composables/useSortingFiltering';
import { useGuessingGame } from './composables/useGuessingGame';

// components
import CountryList from './components/CountryList.vue';
import SearchInput from './components/SearchInput.vue';
// import DarkButton from './../../components/DarkModeButton.vue';

// Reactive states specific to this component
const mode = ref<string>('view'); // 'view' for viewing mode, 'guess' for guessing mode

// Using composables
const { countries, fetchCountries } = useFetchCountries();
const { searchQuery, sortOption, filteredCountries } =
  useSortingFiltering(countries);
const {
  currentGuessCountry,
  userGuess,
  guessFeedback,
  selectRandomCountry,
  checkGuess,
  nextGuess,
} = useGuessingGame(countries);

const toggleMode = () => {
  if (mode.value === 'view') {
    mode.value = 'guess';
    selectRandomCountry();
  } else {
    mode.value = 'view';
  }
  guessFeedback.value = ''; // Reset feedback
};

// dark mode component state
const darkmode = ref<boolean>(false);

// Fetch countries on mounted
onMounted(fetchCountries);
</script>
<template>
  <div
    class="search-page p-4"
    :class="{ 'dark:bg-gray-900': darkmode, 'bg-blue-50': !darkmode }"
  >
    <div
      class="flex flex-col items-center justify-center"
      style="min-height: 05vh"
    >
      <DarkModeButton v-model="darkmode" />

      <h1
        class="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 pb-12"
      >
        {{ mode === 'view' ? 'Country Flags Overview' : 'Identify the Flag' }}
      </h1>
      <button
        @click="toggleMode"
        class="mt-4 bg-gradient-to-r from-pink-500 to-pink-300 text-white font-bold py-2 px-8 rounded-full hover:from-pink-700 hover:to-pink-500 transition duration-300 ease-in-out transform hover:scale-105"
      >
        {{
          mode === 'view'
            ? 'Switch to Flag Guessing Mode'
            : 'Switch to Flags Overview'
        }}
      </button>
    </div>
    <div
      v-if="mode === 'view'"
      class="transition-opacity duration-500 ease-in-out"
    >
      <div class="search-page p-4">
        <SearchInput
          v-model:search-query="searchQuery"
          v-model:sort-option="sortOption"
          :darkmode
        />

        <CountryList :countries="filteredCountries" :night-mode="darkmode" />
      </div>
    </div>
    <div
      v-else
      class="guessing-mode mt-8 bg-coolGray-100 dark:bg-coolGray-800 p-4 rounded-lg shadow transition-opacity duration-500 ease-in-out"
    >
      <div class="flex flex-col items-center justify-center">
        <transition name="slide-left" mode="out-in">
          <img
            v-if="currentGuessCountry"
            :src="currentGuessCountry?.flag"
            :alt="currentGuessCountry?.name"
            :key="currentGuessCountry?.name"
            class="w-96 h-60 mb-4"
          />
        </transition>
        <!-- Adjusted input width to match the flag width -->
        <InputText v-model:user-guess="userGuess" :darkmode />
        <div class="flex space-x-4 mt-4">
          <!-- Applied gradient effect to buttons -->
          <button
            @click="checkGuess"
            class="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Check
          </button>
          <button
            @click="nextGuess"
            class="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Next Flag
          </button>
        </div>
        <!-- Feedback Message with Transition -->
        <div
          class="mt-4 text-lg font-medium transition-all duration-300 ease-in-out transform"
          :class="{
            'text-green-500': guessFeedback === 'Jest!',
            'text-red-500': guessFeedback === 'Źle, zgaduj dalej!',
            'dark:text-green-400': darkmode && guessFeedback === 'Jest!',
            'dark:text-red-400':
              darkmode && guessFeedback === 'Źle, zgaduj dalej!',
            'opacity-0': !guessFeedback,
            'opacity-100 translate-y-2': guessFeedback,
          }"
        >
          {{ guessFeedback }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.search-page {
  width: 95.33%;
  /* One third of the parent's width */
  margin-left: auto;
  /* Center align the div by pushing it equally from both sides */
  margin-right: auto;
  /* Center align the div by pushing it equally from both sides */
}

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
