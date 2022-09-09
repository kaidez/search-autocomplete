import { fetchData, buildList } from './helpers';

export const searchResults = document.querySelector(
  '#searchResults'
) as HTMLDivElement;

const searchTermInObject = 'name';

export async function showAcronymSearchResults(enteredSearchTerm: string) {
  const acronymsFullList = await fetchData('./acronyms.json');
  const acronymsNameList = buildList(acronymsFullList, searchTermInObject);

  let searchResultsList: string = '';
  let nameToMatch = new RegExp(enteredSearchTerm, 'i');

  searchResults.innerHTML = '';

  if (enteredSearchTerm == '') {
    return [];
  }

  return acronymsNameList.filter((nameTerm: string) => {
    if (nameTerm.match(nameToMatch)) {
      const matchedObject = acronymsFullList.find(
        (key: string) => nameTerm === key[searchTermInObject]
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
    searchResults.innerHTML = searchResultsList;
  });
}
