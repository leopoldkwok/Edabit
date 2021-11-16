// The Fifth Argument
// Create a function that has some arguments and returns the type of the fifth argument. In case the arguments were less than 5, return "Not enough arguments".

// Examples
// fifth(1, 2, 3, 4, 5) ➞ "number"

// fifth("a", 2, 3, true, "five") ➞ "string"

// fifth() ➞ "Not enough arguments"
// Notes
// Be warned that ES6 arrow functions (const myFunc = ()=>...) do not have their own arguments object.

function fifth() {
  if (typeof arguments[4] === 'string') {
    return 'string';
  } else if (typeof arguments[4] === 'number') {
    return 'number';
  } else if (typeof arguments[4] === 'boolean') {
    return 'boolean';
  } else {
    return 'Not enough arguments';
  }
}