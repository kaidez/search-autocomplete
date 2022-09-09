import { searchResults, showAcronymSearchResults } from './acronyms';

export const searchField = document.querySelector(
  '#searchField'
) as HTMLInputElement;

export const clearSearchButton = document.querySelector(
  '#clearSearchButton'
) as HTMLDivElement;

searchField.addEventListener('keyup', () => {
  showAcronymSearchResults(searchField.value);
});

clearSearchButton.addEventListener('click', () => {
  searchField.value = '';
  searchResults.innerHTML = '';
});
