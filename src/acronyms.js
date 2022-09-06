import { fetchData, buildList } from './helpers';

export const searchField = document.querySelector('#acronymSearchField');
const searchResults = document.querySelector('#acronymSearchResults');

export async function showAcronymSearchResults(searchTerm) {
  const acronyms = await fetchData('./acronyms.json');
  const acronymsList = buildList(acronyms, 'name');
  let searchResultsListItem = '';
  let regex = new RegExp(searchTerm, 'i');

  searchResults.innerHTML = '';

  if (searchTerm == '') {
    return [];
  }

  return acronymsList.filter((term, idx) => {
    if (term.match(regex)) {
      searchResultsListItem += '<li>' + term + '</li>';
    }
    searchResults.innerHTML = '<ul>' + searchResultsList + '</ul>';
  });
}
