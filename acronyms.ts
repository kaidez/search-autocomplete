import { fetchData, buildList } from './helpers';

export const searchField = document.querySelector(
  '#searchField'
) as HTMLInputElement;
export const searchResults = document.querySelector(
  '#searchResults'
) as HTMLLIElement;
export const clearBtn = document.querySelector('#clear') as HTMLDivElement;

export async function showAcronymSearchResults(enteredSearchTerm: string) {
  const acronymsFullList = await fetchData('./acronyms.json');
  const acronymsNameList = buildList(acronymsFullList, 'name');
  let searchResultsList: string = '';
  let nameToMatch = new RegExp(enteredSearchTerm, 'i');

  searchResults.innerHTML = '';

  if (enteredSearchTerm == '') {
    return [];
  }

  return acronymsNameList.filter((nameTerm: string) => {
    if (nameTerm.match(nameToMatch)) {
      const matchedObject = acronymsFullList.find(
        (key: string) => nameTerm === key['name']
      );

      searchResultsList +=
        '<article>' +
        '<div>' +
        matchedObject.name +
        '</div>' +
        '<div><i>' +
        matchedObject.short_desc +
        '</i></div>' +
        '</article>';
    }
    searchResults.innerHTML = '<section>' + searchResultsList + '</section>';
  });
}
