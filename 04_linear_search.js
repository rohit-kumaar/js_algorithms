/* Creating an array of numbers. */
const array = [2, 4, 10, 30, 28, 35, 41, 96, 2];

/**
 * It loops through the array and returns the index of the number if it's found, otherwise it returns
 * -1.
 * @param array - The array to search through
 * @param number - The number to search for.
 * @returns The index of the number in the array.
 */
const linerSearchIndex = (array, number) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) return i;
  }
  return -1;
  // return array.indexOf(number); //OR
};
console.log(linerSearchIndex(array, 35));

/**
 * For each element in the array, check if it is equal to the number we are looking for. If it is,
 * return true. If we get to the end of the array and haven't found the number, return false.
 * @param array - an array of numbers
 * @param number - The number to search for.
 * @returns true
 */
const linerSearchIncludes = (array, number) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) return true;
  }
  return false;
  // return array.includes(number); //OR
};
console.log(linerSearchIncludes(array, 35));
