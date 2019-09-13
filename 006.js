// Given a sorted list of integers, square the elements and give the output in sorted order.
// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

const integers = [-9, -2, 0, 2, 3];
const squaredAndSorted = integers
  .map(integer => integer * integer)
  .sort((a, b) => a > b);
console.log(squaredAndSorted);
