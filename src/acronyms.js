import { fetchData, buildList } from './helpers';

export const searchField = document.querySelector('#acronymSearchField');
export const searchResults = document.querySelector('#acronymSearchResults');

export async function acronymsInit(searchTerm) {
  const acronyms = await fetchData('./acronyms.json');
  const list = buildList(acronyms, 'name');
  searchResults.innerHTML = '';
  let pageList = '';
  let regex = new RegExp(searchTerm, 'i');

  if (searchTerm == '') {
    return [];
  }

  return list.filter((term, idx) => {
    if (term.match(regex)) {
      console.log('term is', term);
      pageList += '<li>' + term + '</li>';
      //return term;
    }
    searchResults.innerHTML = '<ul>' + pageList + '</ul>';
  });
}

// function autocompleteMatch(input) {
//   if (input == '') {
//     return [];
//   }
//   var regex = new RegExp(input, 'ig');

//   return search_terms.filter((term) => {
//     if (term.match(regex)) {
//       console.log(term);
//       return term;
//     }
//   });
// }

export function showResults(val) {
  searchResults.innerHTML = '';
  let list = '';
  let terms = acronymsInit(val);
  console.log('terms', terms);
  for (var i = 0; i < terms.length; i++) {
    list += '<li>' + terms[i] + '</li>';
  }
  searchResults.innerHTML = '<ul>' + list + '</ul>';
}
