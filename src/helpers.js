// Helper methods...they should always be parametized pure functions

// Fetch any data and format it as JSON
export async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Get the 'objectProperty' value from each item in the 'fetchedObject'
// and place it in a standard JS array/list

//Ex: buildList([{'age': 21}, {'age': '50'}], 'age') returns [21, 50]

export const buildList = (fetchedObject, objectProperty) =>
  fetchedObject.map((item) => item[objectProperty]);
