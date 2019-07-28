// Write a function which will return the count of all characters in a string

function charCount(s) {
  let result = {};
  for (let i = 0; i < s.length; i++) {
    if (!result[s[i]]) result[s[i]] = 0;
    result[s[i]]++;
  }
  console.log(result);
}

charCount("hello world");
