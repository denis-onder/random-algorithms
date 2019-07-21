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
      console.log(`${word}: True`);
      return;
    }
    console.log(`${word}: False`);
  }

  // Do a horizontal check if the vertical check fails
  let horizontalCheckResult = "";
  for (let i = 0; i < matrix.length; i++) {
    horizontalCheckResult = "";
    for (let j = 0; j < matrix[i].length; j++) {
      horizontalCheckResult += matrix[i][j];
    }
    if (horizontalCheckResult === word) {
      console.log(`${word}: True`);
      return;
    }
    console.log(`${word}: False`);
  }
}

main("MASS");
