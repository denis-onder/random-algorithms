// Smash Words
function smash(words) {
  "use strict";
  let result = "";
  words.map(word => (result += `${word} `));
  return result.substring(0, result.length - 1);
}
