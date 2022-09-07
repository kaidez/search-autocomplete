import { fetchData, buildList } from './helpers';

export const searchField = document.querySelector('#searchField');
export const searchResults = document.querySelector('#searchResults');

export async function showAcronymSearchResults(searchTerm: string) {
  const acronyms = await fetchData('./acronyms.json');
  const acronymsList = buildList(acronyms, 'name');
  let searchResultsList = '';
  let regex = new RegExp(searchTerm, 'i');

  searchResults!.innerHTML = '';

  if (searchTerm == '') {
    return [];
  }

  return acronymsList.filter((term: string) => {
    if (term.match(regex)) {
      searchResultsList += '<li>' + term + '</li>';
    }
    searchResults!.innerHTML = '<ul>' + searchResultsList + '</ul>';
  });
}
