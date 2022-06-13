// Method - I
// const removeDuplicateValue = (arrays) =>
//   arrays.filter((element, index, array) => array.indexOf(element) === index);

// Method - II
const removeDuplicateValue = (params) => [...new Set(params)];
console.log(removeDuplicateValue(numbers));
