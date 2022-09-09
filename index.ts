import {
  searchField,
  searchResults,
  clearSearchButton,
  showAcronymSearchResults,
} from './acronyms';

searchField.addEventListener('keyup', () => {
  showAcronymSearchResults(searchField.value);
});

clearSearchButton.addEventListener('click', () => {
  searchField.value = '';
  searchResults.innerHTML = '';
});
