// Taxi Journey
// A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.

// Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.

// Examples
// journeyDistance(3) ➞ 1
// // The first kilometer costs $3

// journeyDistance(9) ➞ 4
// // The first kilometer costs $3 plus the other three kilometers (costing $2 each)

// journeyDistance(5) ➞ 2
// Notes
// The input tests are integers >= 0.
// Remember that you are calculating the distance from the cost, not the other way around!

function journeyDistance(num) {
  if (num <= 3) return num / 3;
  if (num > 3) return (num - 3) / 2 + 1;
}