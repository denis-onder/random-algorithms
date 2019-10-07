/**
 * In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
 * You will be passed a string and you must return that string in an array where an uppercase letter
 * is a person standing up.
 */
function wave(str) {
  let result = [];
  if (str === "" || str === " ") return result;
  function capitalize(index) {
    // If the index is 0, return the capitalized string
    if (index === 0)
      return result.push(str.charAt(0).toUpperCase() + str.slice(1));
    // Set target character to capitalize
    const target = str[index];
    // Copy the parts of the string before and after the target
    const beforeIndex = str.slice(0, index);
    const afterIndex = str.slice(index + 1, str.length);
    // Capitalize the target, form a string and push it to the return array
    result.push(
      `${beforeIndex.toLowerCase()}${target.toUpperCase()}${afterIndex.toLowerCase()}`
    );
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") capitalize(i);
  }
  return result;
}

console.log(wave("two words"));
