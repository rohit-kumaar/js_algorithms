const array = [2, 4, 10, 30, 28, 35, 41, 96, 2];

const linerSearch = (array, number) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) return i;
  }
  return -1;
};

console.log(linerSearch(array, 35));
