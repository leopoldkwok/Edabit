// Repeat String
// Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// If given argument txt is not a string, return Not A String !!

// Examples
// repeatString("Mubashir", 2) ➞ "MubashirMubashir"

// repeatString("Matt", 3) ➞ "MattMattMatt"

// repeatString(1990, 7) ➞ "Not A String !!"

function repeatString(txt, n) {
  return typeof txt === 'string' ? txt.repeat(n) : 'Not A String !!';
}