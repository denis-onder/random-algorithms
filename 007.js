/*
  Given a real number n, find the square root of n.
  For example, given n = 9, return 3.
*/

const findSquareRoot = n => {
  for (let i = 1; i < n; i++) {
    if (Number.isSafeInteger(i)) {
      const result = Math.pow(i, 2);
      if (result === n) {
        console.log(`Square root of ${n} is ${i}`);
      }
    }
  }
};

findSquareRoot(16);
