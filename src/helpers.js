// Get the 'objectProp' value from each item in the 'fetchedObj'
// and place it in a standard JS array/list
export const buildList = (fetchedObject, objectProperty) =>
  fetchedObject.map((item) => item[objectProperty]);
