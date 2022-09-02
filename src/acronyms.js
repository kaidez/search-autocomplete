import { buildList } from './helpers';

const searchField = document.querySelector('#acronymSearchField');
const searchResults = document.querySelector('#acronymSearchResults');

// Defining async function
export async function getAcronyms() {
  const response = await fetch('./acronyms.json');

  // Storing data in form of JSON
  const data = await response.json();
  show(data);
}

function show(data) {
  const names = buildList(data, 'name');

  if (searchField == '') {
    return [];
  }

  let regex = new RegExp(searchField);

  return names.filter(function (term) {
    if (term.match(regex)) {
      return term;
    }
  });

  names.forEach((item) => {
    const newDiv = document.createElement('div');
    newDiv.textContent = item;
    searchResults.appendChild(newDiv);
  });

  // console.log('names', names);
  // console.log('data', data);
}

searchField.addEventListener('keyup', keyUp);

export function keyUp() {
  console.log(this.value);
  getAcronyms();
}
