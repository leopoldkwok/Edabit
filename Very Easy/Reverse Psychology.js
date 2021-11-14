// Reverse Psychology
// For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

// Examples
// reversePsychology("wash the dishes") ➞ "Do not wash the dishes."

// reversePsychology("eat your lunch") ➞ "Do not eat your lunch."

// reversePsychology("go to school") ➞ "Do not go to school."

function reversePsychology(s = '') {
  // DO NOT WRITE YOUR CODE HERE
  return s == '' ? `Do not do anything.` : `Do not ${s}.`;
}