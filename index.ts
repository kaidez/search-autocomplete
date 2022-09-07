import { searchField, showAcronymSearchResults } from './acronyms';

searchField.addEventListener('keyup', () => {
  showAcronymSearchResults(searchField.value);
});
