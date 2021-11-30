// Concatenating First and Last Character of a String
// Create a function that takes a string and returns the concatenated first and last character.

// Examples
// firstLast("ganesh") ➞ "gh"

// firstLast("kali") ➞ "ki"

// firstLast("shiva") ➞ "sa"

// firstLast("vishnu") ➞ "vu"

// firstLast("durga") ➞ "da"
// Notes
// There is no empty string.

function firstLast(name) {
  return `${name.split('')[0]}${name.split('')[name.length - 1]}`;
}