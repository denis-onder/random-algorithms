/*
  Daily Coding Problem #63

  Given a 2D matrix of characters and a target word, 
  write a function that returns whether the word can be found in the matrix by going left-to-right, or up-to-down.
  For example, given the following matrix and the target word 'FOAM', you should return true, since it's the leftmost column. 
  Similarly, given the target word 'MASS', you should return true, since it's the last row.

  Matrix:
  [['F', 'A', 'C', 'I'],
  ['O', 'B', 'Q', 'P'],
  ['A', 'N', 'O', 'B'],
  ['M', 'A', 'S', 'S']]
*/

function main(word) {
  console.log(`Testing the matrix against the word ${word}...`);
  const matrix = [
    ["F", "A", "C", "I"],
    ["O", "B", "Q", "P"],
    ["A", "N", "O", "B"],
    ["M", "A", "S", "S"]
  ];
  // Do the vertical check
  console.log("Doing an vertical check...");
  for (let i = 0; i < matrix.length; i++) {
    const verticalCheckResult = matrix.reduce(
      (acc, curr) => (acc += curr[i]),
      ""
    );
    if (verticalCheckResult === word) {
      console.log(`${word}: True\n`);
      return;
    }
    console.log(`${word}: False`);
  }
  // Do a horizontal check if the vertical check fails
  console.log("Vertical check failed!");
  console.log("Doing an horizontal check...");
  let horizontalCheckResult = "";
  for (let i = 0; i < matrix.length; i++) {
    horizontalCheckResult = matrix[i].reduce((acc, curr) => (acc += curr), "");
    if (horizontalCheckResult === word) {
      console.log(`${word}: True\n`);
      return;
    }
    console.log(`${word}: False`);
  }
  // Log errors
  console.log("Horizontal check failed!");
  console.log(`${word} has no match within matrix!\n`);
}

const testCases = ["FOAM", "CARD", "MASS"];
testCases.forEach(main);
