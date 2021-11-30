// Is the Water Boiling?
// Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in fahrenheit and celsius.

// Examples
// isBoiling("212F") ➞ true

// isBoiling("100C") ➞ true

// isBoiling("0F") ➞ false
// Notes
// The boiling point of water is 212F in fahrenheit and 100C in celsius.

function isBoiling(temp) {
  if (temp.endsWith('F') && temp.split('').slice(0, -1).join('') >= 212) {
    return true;
  } else if (
    temp.endsWith('C') &&
    temp.split('').slice(0, -1).join('') >= 100
  ) {
    return true;
  } else {
    return false;
  }
}