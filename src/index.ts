import { searchResults, showAcronymSearchResults } from './acronyms';

const searchField = document.querySelector('#searchField') as HTMLInputElement;

export const clearSearchButton = document.querySelector(
  '#clearSearchButton'
) as HTMLDivElement;

function showHideClearSearchButton() {
  if (searchResults.childNodes.length >= 1) {
    clearSearchButton.style.opacity = '1';
    clearSearchButton.style.cursor = 'pointer';
  } else {
    clearSearchButton.style.opacity = '0';
    clearSearchButton.style.cursor = 'none';
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
  clearSearchButton.style.opacity = '0';
  clearSearchButton.style.cursor = 'none';
});
