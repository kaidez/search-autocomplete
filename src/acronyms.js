// Defining async function
export async function getAcronyms() {
  const response = await fetch('./acronyms.json');

  // Storing data in form of JSON
  const data = await response.json();
  show(data);
}

function show(data) {
  console.log('data', data);
}
