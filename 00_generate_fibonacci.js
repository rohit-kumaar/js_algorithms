/**
 * 0 n = 0;
 * 1 n = 1;
 * (n - 1) + (n - 2) n > 1;
 */

const fib = (n) => {
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
};

console.log(fib(3));
