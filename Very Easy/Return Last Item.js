// Return Last Item
// Create a function that returns the last value of the last item in an array or string.

// Examples
// lastItem([0, 4, 19, 34, 50, -9, 2]) ➞ 2

// lastItem("The quick brown fox jumped over the lazy dog") ➞ "g"

// lastItem([]) ➞ undefined
// Notes
// Arrays/strings will be of varying size.
// Return undefined if array/string is empty.

function lastItem(input) {
  return typeof input == 'string' ? input.split('').pop() : input.pop();
}