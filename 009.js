/*
  Complete the function that accepts a string parameter, and reverses each word in the string. 
  All spaces in the string should be retained.
*/

function reverseWords(str) {
  const words = str.split(" ");
  let result = "";
  for (const word of words) {
    let i = word.length;
    while (i > 0) {
      result += word.substring(i - 1, i);
      i--;
    }
    result += " ";
  }
  return result.substring(0, result.length - 1);
}

console.log(reverseWords("test"));
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
console.log(reverseWords("a b c d"));
