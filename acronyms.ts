import { fetchData, buildList } from './helpers';

export const searchField = document.querySelector(
  '#searchField'
) as HTMLInputElement;
export const searchResults = document.querySelector(
  '#searchResults'
) as HTMLElement;

export async function showAcronymSearchResults(searchTerm: string) {
  const acronyms = await fetchData('./acronyms.json');
  const acronymsNameList = buildList(acronyms, 'name');
  let searchResultsList: string = '';
  let regex = new RegExp(searchTerm, 'i');

  searchResults!.innerHTML = '';

  if (searchTerm == '') {
    return [];
  }

  return acronymsNameList.filter((term: string) => {
    if (term.match(regex)) {
      searchResultsList += '<li>' + term + '</li>';
    }
    searchResults!.innerHTML = '<ul>' + searchResultsList + '</ul>';
  });
}
