/*
  You have an array of objects in JavaScript. 
  Each one contains a name (a string) and ranking (a number). 
  Write two functions, one to return the objects ordered by ranking and another to return the average ranking.
*/

const data = [
  {
    name: "Sean",
    ranking: 1
  },
  {
    name: "Peter",
    ranking: 5
  },
  {
    name: "Jake",
    ranking: 2
  },
  {
    name: "Brian",
    ranking: 4
  },
  {
    name: "Ashley",
    ranking: 3
  }
];

function orderByRanking() {
  return data.sort((a, b) => a.ranking - b.ranking);
}

function getAverageRanking() {
  return data.reduce((acc, curr) => (acc += curr.ranking), 0) / data.length;
}

console.log("Order by ranking: \n", orderByRanking(), "\n");
console.log("Average ranking: ", getAverageRanking(), "\n");
