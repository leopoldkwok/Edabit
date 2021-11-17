// Lowercase, Uppercase or Mixed?
// Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

// Examples
// getCase("whisper...") ➞ "lower"

// getCase("SHOUT!") ➞ "upper"

// getCase("Indoor Voice") ➞ "mixed"
// Notes
// Ignore punctuation, spaces and numbers.

function getCase(str) {
  if (str === str.toLowerCase()) {
    return `lower`;
  } else if (str === str.toUpperCase()) {
    return `upper`;
  } else {
    return `mixed`;
  }
}