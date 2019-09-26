function rentalCarCost(d) {
  // Your solution here
  const costPerDay = 40;
  total = costPerDay * d;
  if (d >= 7) total -= 50;
  if (d >= 3 && d < 7) total -= 20;
  return total;
}

console.log(rentalCarCost(5));
