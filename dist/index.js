// import { buildList } from './helpers';

const searchField = document.querySelector('#acronymSearchField');
const searchResults = document.querySelector('#acronymSearchResults');

var search_terms = ['Steven', 'Sean', 'Stefan', 'Sam', 'Nathan'];

function autocompleteMatch(input, i) {
  if (input == '') {
    return [];
  }
  var regex = new RegExp(input);
  var foo = searchField.value;
  console.log(foo.match(regex));
  console.log('regex', regex);
  return search_terms.filter((term) => {
    if (term.match(regex)) {
      return term;
    } else {
      console.log('no match');
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
