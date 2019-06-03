const argv = require('yargs')
              .usage('Usage: $0 --x=[num] --y=[num] --z=[num]')
              .demand(['x', 'y', 'z'])
              .argv;

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

let maxResult = maxOfThree(argv.x, argv.y, argv.z);
console.log(maxResult);