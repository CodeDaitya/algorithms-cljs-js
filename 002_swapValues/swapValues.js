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

let a;
let b;
const readInputOne = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readInputOne.question('Enter the first number (a): ', (input) => {
  
  if (isNaN(input)) {
    
    console.log('Invalid input! Exiting!!');
    readInputOne.close();
    process.exit();
  } else if (parseInt(input) > Number.MAX_SAFE_INTEGER) {
    
    console.log('Number too large! Exiting!!');
    readInput.close();
    process.exit();
  } else {
    
    a = input;
    readInputOne.close();
  }
});

const readInputTwo = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readInputTwo.question('Enter the second number (b): ', (input) => {
  
  if (isNaN(input)) {

    console.log('Invalid input! Exiting!!');
    readInputOne.close();
    process.exit();
  } else if (parseInt(input) > Number.MAX_SAFE_INTEGER) {
    
    console.log('Number too large! Exiting!!');
    readInputTwo.close();
  } else {
    
    b = input;
    readInputTwo.close();
  }
});

swapValues(a, b);