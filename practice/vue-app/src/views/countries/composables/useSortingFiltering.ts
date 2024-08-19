import { ref, computed, Ref } from 'vue';
import { Country } from '../types';

export function useSortingFiltering(countries: Ref<Country[]>) {
  const searchQuery = ref('');
  const sortOption = ref('name');

  const filteredCountries = computed(() => {
    let sorted = [...countries.value];
    
    // Sorting logic
    if (sortOption.value === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption.value === 'population') {
      sorted.sort((a, b) => a.population - b.population);
    }

    // Filtering logic
    if (!searchQuery.value) {
      return sorted;
    } else {
      const query = searchQuery.value.toLowerCase();
      return sorted.filter(
        (country) =>
          country.name.toLowerCase().includes(query) ||
          country.currencies.some((currency) =>
            currency.toLowerCase().includes(query)
          ) ||
          country.languages.some((language) =>
            language.toLowerCase().includes(query)
          ) ||
          (country.capital && country.capital.toLowerCase().includes(query))
      );
    }
  });

  return { searchQuery, sortOption, filteredCountries }
}