// Burglary Series (07): Make a Copy
// Your spouse wants a copy of the stolen items. Given an object containing the stolen items, return a copy of that list.

// Examples
// { piano: 100, tv: 50 } ➞ { piano: 100, tv: 50 }

function makeCopy(obj) {
  const newCopy = { ...obj };
  return newCopy;
}