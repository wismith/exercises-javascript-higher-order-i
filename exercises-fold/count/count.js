/**
 * Given an array and a function, returns the number of elements in array
 * for which the returns true.
 *
 * @example
 * count([1, 2, 3, 4, 5, 6], isEven); // => 3
 *
 * @param {any[]} collection - An array whose elements we want to count
 * @param {function} predicate - A function that returns `true` or `false`
 * @returns {number} The number of elements in `collection` for which `predicate`
 *  returns `true`
 */
function count(collection, predicate) {
  return fold(collection, function(acc, item) {
    if (predicate(item)) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}

function isEven(item){
  if (item % 2 === 0){
    return true;
  }
  return false;
}
let isPrime = require('/Users/willsmith/Desktop/exercises-javascript-fundamentals/exercises/numbers/isPrime/isPrime');


function fold(collection, fn, init){
  let acc = init;
  for (let item of collection){
    acc = fn(acc, item);
  }
  return acc;
}


if (require.main === module) {
  console.log('Running sanity checks for count:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(count([1,2,3,4,5,6,7,8], isEven) === 4);
  console.log(count([1,2,3,4,5,6,7,8], isPrime) === 4);
}

module.exports = count;
