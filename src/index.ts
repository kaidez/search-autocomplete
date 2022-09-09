import { searchResults, showAcronymSearchResults } from './acronyms';

export const searchField = document.querySelector(
  '#searchField'
) as HTMLInputElement;

export const clearSearchButton = document.querySelector(
  '#clearSearchButton'
) as HTMLDivElement;

function showHideClearSearchButton() {
  if (searchResults.childNodes.length >= 1) {
    clearSearchButton.classList.add('clearButtonFadeIn');
    clearSearchButton.classList.remove('clearButtonOpacity');
  } else {
    clearSearchButton.classList.remove('clearButtonFadeIn');
    clearSearchButton.classList.add('clearButtonOpacity');
  }
}

searchField.addEventListener('keyup', () => {
  showAcronymSearchResults(searchField.value);

  setTimeout(() => {
    showHideClearSearchButton();
  }, 100);
});

clearSearchButton.addEventListener('click', () => {
  searchField.value = '';
  searchResults.innerHTML = '';
  clearSearchButton.classList.remove('clearButtonFadeIn');
  clearSearchButton.classList.add('clearButtonOpacity');
});
