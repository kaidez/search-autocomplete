import { buildList } from './helpers';

// Defining async function
export async function getAcronyms() {
  const response = await fetch('./acronyms.json');

  // Storing data in form of JSON
  const data = await response.json();
  show(data);
}

function show(data) {
  const names = buildList(data, 'name');
  console.log('names', names);
  console.log('data', data);

  const results = document.querySelector('#searchResults');
  names.forEach((item) => {
    const newDiv = document.createElement('div');
    newDiv.textContent = item;
    results.appendChild(newDiv);
  });
}

const searchField = document.querySelector('#acronymSearchField');
searchField.addEventListener('keyup', keyUp);

function keyUp() {
  getAcronyms();
}
