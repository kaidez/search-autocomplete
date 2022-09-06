/* Helper methods...they should always be pure functions */

// Fetch any data and format it as JSON
export async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Get the 'objectProperty' value from each item in the 'fetchedObject'
// and place it in a standard JS array/list
export const buildList = (fetchedObject, objectProperty) =>
  fetchedObject.map((item) => item[objectProperty]);
