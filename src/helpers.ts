// Helper methods...they should always be parametized pure functions

/**
 *
 * @param url
 * @returns data
 *
 * Fetch any data and format it as JSON
 */
export async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

/**
 *
 * @param obj
 * @param objectProperty
 * @returns newArray
 * Loop over an array of objects (arr) and if the 'objectProperty' is
 * in one of those objects, place it in a standard JS array
 *
 * Ex: buildList([{'age': 21}, {'name': 'joe'}], 'age') returns [21]
 */
export const buildList = (arr: object[], objectProperty: string) => {
  let newArray: (string | number)[] = [];
  arr.map((objectArray: object[]) => {
    if (objectArray[objectProperty] !== undefined) {
      newArray.push(objectArray[objectProperty]);
    }
  });
  return newArray;
};
