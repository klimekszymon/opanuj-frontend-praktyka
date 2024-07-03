<script setup lang="ts">
const darkmode = defineModel();

// Method to toggle dark mode
const toggleDarkMode = () => {
  darkmode.value = !darkmode.value;
  document.body.classList.toggle('dark');
};
</script>
<template>
  <button
    @click="toggleDarkMode"
    :class="{
      'bg-gray-800 text-white': darkmode,
      'bg-white text-gray-800': !darkmode,
    }"
    class="flex items-center justify-center mt-5 mb-6 py-2 px-4 rounded-full shadow-lg font-semibold text-lg transition-colors duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r from-blue-500 to-teal-400"
  >
    <span v-if="darkmode">
      <!-- Sun Icon for Day -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi bi-brightness-high"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path d="M12.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z" />
        <path
          d="M8 0a.5.5 0 0 1 .5.5V3a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 8 0zM1.343 2.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707L1.343 3.05a.5.5 0 0 1 0-.707zM0 8a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H.5A.5.5 0 0 1 0 8zm13.5-.5h2.5a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1 0-1zm-9.657 4.657a.5.5 0 0 1 .707 0l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0zm9.193 0a.5.5 0 0 1 0 .707l-1.414-1.414a.5.5 0 1 1 .707-.707l1.414 1.414zM8 13a.5.5 0 0 1-.5.5v2.5a.5.5 0 0 1 1 0v-2.5A.5.5 0 0 1 8 13zm0-12a7 7 0 1 0 0 14A7 7 0 0 0 8 1z"
        />
      </svg>
    </span>
    <span v-else>
      <!-- Moon Icon for Night -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi bi-moon"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          d="M6.354 1.654a7 7 0 1 0 8.138 11.792A7 7 0 0 0 6.354 1.655zM7 13.5a6.5 6.5 0 0 1 6.5-6.5A6.988 6.988 0 0 0 7 13.5z"
        />
      </svg>
    </span>
    Noc / Dzień
  </button>
</template>
