// Word without First Character
// Create a function that takes a word and returns the new word without including the first character.

// Examples
// newWord("apple") ➞ "pple"

// newWord("cherry") ➞ "herry"

// newWord("plum") ➞ "lum"

function newWord(str) {
  return str.substring(1);
}