// AND, OR and NOT
// You will need to write three unfinished logic gates. Continue to write the three logic gates: AND, OR, and NOT.

// Examples
// AND(1, 1) ➞ 1
// AND(0, 0) ➞ 0

// OR(1, 0) ➞ 1
// OR(1, 1) ➞ 1

// NOT(0) ➞ 1
// NOT(1) ➞ 0

function NOT(n) {
  return n == 0 ? 1 : 0;
}

function AND(a, b) {
  return a == b ? a : 0;
}

function OR(a, b) {
  return a == 1 || b == 1 ? 1 : 0;
}