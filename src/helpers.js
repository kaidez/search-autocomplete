// Helper methods...they should always be parametized pure functions

// Fetch any data and format it as JSON
export async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Loop over an array of objects and if the 'objectProperty' is in that
// object, place it in a standard JS array
// Example:
// buildList([{'age': 21}, {'name': 'joe'}, {'age': 50}])...
// ...returns [21, 50]
export const buildList = (fetchedObject, objectProperty) => {
  let arr = [];
  fetchedObject.map((obj) => {
    if (obj[objectProperty] !== undefined) {
      arr.push(obj[objectProperty]);
    }
  });
  return arr;
};
