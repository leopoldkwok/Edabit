// Luke, I Am Your ...
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples
// relationToLuke("Darth Vader") ➞ "Luke, I am your father."

// relationToLuke("Leia") ➞ "Luke, I am your sister."

// relationToLuke("Han") ➞ "Luke, I am your brother in law."

function relationToLuke(name) {
  if (name === 'Darth Vader') {
    return 'Luke, I am your father.';
  } else if (name === 'Leia') {
    return 'Luke, I am your sister.';
  } else if (name === 'Han') {
    return 'Luke, I am your brother in law.';
  } else {
    return 'Luke, I am your droid.';
  }
}
