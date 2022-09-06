// Helper methods...they should always be parametized pure functions

// Fetch any data and format it as JSON
export async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Loop over an array of objects, find a property of one of the
// objects, then place all those properties in a standard JS array
// Ex: buildList([{'age': 21}, {'age': 50}], 'age') returns [21, 50]
export const buildList = (fetchedObject, objectProperty) =>
  fetchedObject.map((item) => item[objectProperty]);
