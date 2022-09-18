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
 * @param arr
 * @param objectProperty
 * @returns newArray (contains either strings or numbers)
 *
 * Loop over an array of objects ('arr') and if the 'objectProperty'
 * is in one of those objects, place it in 'newArray'.
 *
 * Ex: buildList([{'age': 21}, {'name': 'joe'}], 'age') returns [21]
 */
export const buildList = (
  arr: object[],
  objectProperty: string
): (string | number)[] => {
  let newArray: (string | number)[] = [];
  arr.map((objectArray: object[]) => {
    if (objectArray[objectProperty] !== undefined) {
      newArray.push(objectArray[objectProperty]);
    }
  });
  return newArray;
};
