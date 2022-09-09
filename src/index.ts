import { searchResults, showAcronymSearchResults } from './acronyms';

export const searchField = document.querySelector(
  '#searchField'
) as HTMLInputElement;

export const clearSearchButton = document.querySelector(
  '#clearSearchButton'
) as HTMLDivElement;

function showHideClearSearchButton() {
  if (searchResults.childNodes.length >= 1) {
    clearSearchButton.classList.add('fade-in-image');
    clearSearchButton.classList.remove('clearButtonOpacity');
  } else {
    clearSearchButton.classList.remove('fade-in-image');
    clearSearchButton.classList.add('clearButtonOpacity');
  }
}

searchField.addEventListener('keyup', () => {
  showAcronymSearchResults(searchField.value);

  setTimeout(() => {
    showHideClearSearchButton();
  }, 300);
});

// searchField.addEventListener('focus', () => {
//   clearSearchButton.classList.add('fade-in-image');
//   clearSearchButton.classList.remove('clearButtonOpacity');
// });

// searchField.addEventListener('blur', () => {
//   clearSearchButton.classList.remove('fade-in-image');
//   clearSearchButton.classList.add('clearButtonOpacity');
// });

clearSearchButton.addEventListener('click', () => {
  searchField.value = '';
  searchResults.innerHTML = '';
  clearSearchButton.classList.remove('fade-in-image');
  clearSearchButton.classList.add('clearButtonOpacity');
});
