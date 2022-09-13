import { searchResults, showAcronymSearchResults } from './acronyms';

const searchField = document.querySelector('#searchField') as HTMLInputElement;

export const clearSearchButton = document.querySelector(
  '#clearSearchButton'
) as HTMLDivElement;

export function showHideClearSearchButton() {
  if (searchResults.childNodes.length >= 1 || searchField.value != '') {
    clearSearchButton.style.opacity = '1';
    clearSearchButton.style.cursor = 'pointer';
    clearSearchButton.classList.add('clearButtonFadeIn');
    clearSearchButton.classList.remove('clearButtonFadeOut');
    searchField.style.width = '240px';
  } else {
    clearSearchButton.style.opacity = '0';
    clearSearchButton.style.cursor = 'none';
    clearSearchButton.classList.remove('clearButtonFadeIn');
    clearSearchButton.classList.add('clearButtonFadeOut');
    searchField.style.width = '220px';
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
  searchField.style.width = '220px';
  searchResults.innerHTML = '';
  clearSearchButton.style.opacity = '0';
  clearSearchButton.style.cursor = 'none';
  clearSearchButton.classList.remove('clearButtonFadeIn');
  clearSearchButton.classList.add('clearButtonFadeOut');
});
