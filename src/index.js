import { searchField, acronymsInit, showResults } from './acronyms';

searchField.addEventListener('keyup', () => {
  acronymsInit(searchField.value);
});
