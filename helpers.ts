// Helper methods...they should always be parametized pure functions

// Fetch any data and format it as JSON
export async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Loop over an array of objects and if the 'objectProperty' is in an
// object, place it in a standard JS array
// Example:
// buildList([{'age': 21}, {'name': 'joe'}, {'age': 50}], 'name') will
// return ['joe']
export const buildList = (obj: object[], objectProperty: string) => {
  let arr: string[] = [];
  obj.map((objectArray: object[]) => {
    if (objectArray[objectProperty] !== undefined) {
      arr.push(objectArray[objectProperty]);
    }
  });
  return arr;
};
