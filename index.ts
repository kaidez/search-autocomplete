import {
  searchField,
  searchResults,
  clearBtn,
  showAcronymSearchResults,
} from './acronyms';

searchField.addEventListener('keyup', () => {
  showAcronymSearchResults(searchField.value);
});

clearBtn.addEventListener('click', () => {
  searchField.value = '';
  searchResults.innerHTML = '';
});
