// Minimal VI: Ternary Operator
// In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

// Write a function that returns the strings:

// "both" if both given booleans a and b are true.
// "first" if only a is true.
// "second" if only b is true .
// "neither" if both a and b are false.
// Tips
// If-else statements can be written as a oneliner using Javascript's ternary operator.

// For example, the code:

// function startswith(name) {
//   if ("AEIOU".includes(name[0])) {
//     return "vowel"
//   } else {
//     return "consonant"
//   }
// }
// Can be simplified to:

// function startswith(name) {
//   return "AEIOU".includes(name[0]) ? "vowel" : "consonant"
// }
// Bonus
// You can concatenate as many ternary operators as you want. However, concatenating too many can diminish the readability of your code.

// x > 50 ? "majority" : x < 50 ? "minority" : "draw"

function areTrue(a, b) {
  return a && b
    ? 'both'
    : a === true && b === false
    ? 'first'
    : a === false && b === true
    ? 'second'
    : 'neither';
}
