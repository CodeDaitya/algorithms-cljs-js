const readline = require('readline');

/**
 * @param  {} x
 * @param  {} y
 * @param  {} z
 */
function maxOfThree(x, y, z) {
  
  let max = x;
  if (y > max) {
    
    if (y >= z) {

      max = y;
    } else {
      
      max = z;
    }
  } else if (z > max) {
    
    if (z > y) {
      
      max = z;
    } else {
      
      max = y;
    }
  }
  
  return max;
}

const readInput = readline.createInterface({
  input : process.stdin,
  output: process.stdout
});

readInput.question('Enter a space separated list of 3 numbers: ', (input) => {
  
  let inputArray = input.split(' ');

  // Check input validity
  if (isNaN(inputArray[0]) || isNaN(inputArray[1]) || isNaN(inputArray[2]) ||
       inputArray.length > 3 || inputArray.length < 3) {
    
    console.log('Invalid Input!\nExiting!!');
    readInput.close();
  } else {
    
    let maxResult = maxOfThree(inputArray[0], inputArray[1], inputArray[2]);
    console.log(maxResult);
    readInput.close();
  }
});