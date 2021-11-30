/*

Shapes With N Sides
Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

Inputs	Outputs
1	"circle"
2	"semi-circle"
3	"triangle"
4	"square"
5	"pentagon"
6	"hexagon"
7	"heptagon"
8	"octagon"
9	"nonagon"
10	"decagon"
Examples
nSidedShape(3) ➞ "triangle"

nSidedShape(1) ➞ "circle"

nSidedShape(9) ➞ "nonagon"

Notes
There won't be any tests with a number below 1 or greater than 10.
Return the output in lowercase.
The challenge is intended to be completed without conditionals (it would take too long)!

*/

function nSidedShape(n) {
  let shape;
  switch (n) {
    case 1:
      shape = 'circle';
      break;
    case 2:
      shape = 'semi-circle';
      break;
    case 3:
      shape = 'triangle';
      break;
    case 4:
      shape = 'square';
      break;
    case 5:
      shape = 'pentagon';
      break;
    case 6:
      shape = 'hexagon';
      break;
    case 7:
      shape = 'heptagon';
      break;
    case 8:
      shape = 'octagon';
      break;
    case 9:
      shape = 'nonagon';
      break;
    case 10:
      shape = 'decagon';
      break;
    default:
      shape = null;
  }
  return shape;
}