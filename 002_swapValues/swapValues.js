const readline = require('readline');

/**
 * Method swapValues(a, b) swaps values in two variables
 * 
 * @param {*} a 
 * @param {*} b 
 */
function swapValues(a, b) {
  
  a = a + b;
  b = a - b;
  a = a - b;
  console.log('a : ' + a, 'b : ' + b);
}