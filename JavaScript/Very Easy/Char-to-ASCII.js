// Char-to-ASCII
// Create a function that returns the ASCII value of the passed in character.

// Examples
// ctoa("A") ➞ 65

// ctoa("m") ➞ 109

// ctoa("[") ➞ 91

// ctoa("\") ➞ 92

function ctoa(c) {
  return c.charCodeAt(0);
}