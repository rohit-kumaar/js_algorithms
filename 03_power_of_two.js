let number = 6;

const isPowerOfTwo = (n) => {
  //   let result = Math.pow(2, 3);
  //   return result === n ? true : false;
  if (n <= 1) return false;

  if (n > 1) {
    return n % 2 === 0 ? true : false;
  }
};

console.log(isPowerOfTwo(number));
