// useGuessingGame.ts
import { ref } from 'vue';
import { Country } from '../types'; // Assuming this path is correct

export function useGuessingGame(countries: Ref<Country[]>) {
  const currentGuessCountry = ref<Country | null>(null);
  const userGuess = ref('');
  const guessFeedback = ref('');

  const selectRandomCountry = () => {
    if (countries.value.length > 0) {
      const randomIndex = Math.floor(Math.random() * countries.value.length);
      currentGuessCountry.value = countries.value[randomIndex];
    }
  };

  const checkGuess = () => {
    if (userGuess.value.toLowerCase() === currentGuessCountry.value?.name.toLowerCase()) {
      guessFeedback.value = 'Correct!';
      selectRandomCountry(); // Select a new random country
    } else {
      guessFeedback.value = 'Wrong, try again!';
    }
  };

  // Reset for next guess
  const nextGuess = () => {
    userGuess.value = ''; // Clear the user's guess
    guessFeedback.value = ''; // Clear the feedback
    selectRandomCountry(); // Select a new random country
  };

  // Initialize the first guess
  selectRandomCountry();

  return { currentGuessCountry, userGuess, guessFeedback, selectRandomCountry, checkGuess, nextGuess };
}