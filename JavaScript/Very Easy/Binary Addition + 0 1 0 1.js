// Binary Addition + 0 1 0 1
// Create a function that takes two numbers and returns their sum as a binary string.

// Examples
// addBinary(1, 1) ➞ "10"

// addBinary(1, 2) ➞ "11"

// addBinary(4, 5) ➞ "1001"

function addBinary(a, b) {
  return (a + b).toString(2);
}