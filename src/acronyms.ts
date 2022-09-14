import { fetchData, buildList } from './helpers';

export const searchResults = document.querySelector(
  '#searchResults'
) as HTMLDivElement;

const searchTermInObject = 'name';

/**
 *
 * @param enteredSearchTerm
 * @returns 'acronymsNameList.filter()' as a string
 */
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
        '<div class="resultCard"><h1>' +
        matchedObject.name +
        '</h1></div>' +
        '<div>' +
        matchedObject.short_desc +
        '</div>' +
        '</article>';
    }
    searchResults.innerHTML = searchResultsList;
  });
}
