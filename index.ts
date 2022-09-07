import { searchField, clearBtn, showAcronymSearchResults } from './acronyms';

searchField.addEventListener('keyup', () => {
  showAcronymSearchResults(searchField.value);
});

clearBtn.addEventListener('click', () => {
  searchField.value = '';
});
