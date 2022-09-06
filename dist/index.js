// import { buildList } from './helpers';

const searchField = document.querySelector('#acronymSearchField');
const searchResults = document.querySelector('#acronymSearchResults');

var search_terms = ['Steven', 'Sean', 'Stefan', 'Sam', 'Nathan'];

function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }
  var regex = new RegExp(input, 'ig');
  var foo = searchField.value;
  return search_terms.filter((term) => {
    if (term.match(regex)) {
      console.log(term);
      return term;
    }
  });
}

function showResults(val) {
  console.log(val);
  searchResults.innerHTML = '';
  let list = '';
  let terms = autocompleteMatch(val);
  for (var i = 0; i < terms.length; i++) {
    list += '<li>' + terms[i] + '</li>';
  }
  searchResults.innerHTML = '<ul>' + list + '</ul>';
}
