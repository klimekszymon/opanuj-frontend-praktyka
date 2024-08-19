import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Country } from '../types'; // Assume you have a types.ts file for TypeScript interfaces

export function useFetchCountries() {
  const countries = ref<Country[]>([]);
  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      countries.value = response.data.map((country: any) => ({
        name: country.name.common,
        flag: country.flags.svg,
        currencies: Object.keys(country.currencies || {}),
        languages: Object.values(country.languages || {}),
        capital: country.capital ? country.capital[0] : 'N/A',
        population: country.population,
      }));
    } catch (error) {
      console.error('Failed to fetch countries:', error);
    }
  };
  onMounted(fetchCountries);
  return { countries, fetchCountries };
}