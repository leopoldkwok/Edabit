/*

Secret Function 2.0
Create a function based on the input and output. Look at the examples, there is a pattern.

Examples
secret("div*2") ➞ "<div></div><div></div>"

secret("p*1") ➞ "<p></p>"

secret("li*3") ➞ "<li></li><li></li><li></li>"

Notes
Input is a string.

*/

function secret(text) {
  return `<${text.split('*')[0]}></${text.split('*')[0]}>`.repeat(
    text.split('*')[01]
  );
}