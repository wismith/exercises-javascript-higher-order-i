/**
 * Checks if `predicate` returns `true` for **every** element of `collection`.
 *
 * @example
 * every([1, 2, 3, 4, 5, 6], isEven); // => false
 * every([2, 4, 6, 8], isEven); // => true
 *
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} predicate - A function that returns `true` or `false`
 * @returns {boolean} Returns `true` if `predicate` is `true` for every
 *  element of `collection` and `false` otherwise.
 */
function every(collection, predicate) {
  for (let item of collection){
    if (!predicate(item)){
      return false;
    }
  }
  return true;
}

let isPrime = require('/Users/willsmith/Desktop/exercises-javascript-fundamentals/exercises/numbers/isPrime/isPrime');
let isPositive = require('/Users/willsmith/Desktop/exercises-javascript-fundamentals/exercises/numbers/isPositive/isPositive');
let isEven = require('/Users/willsmith/Desktop/exercises-javascript-fundamentals/exercises/numbers/isEven/isEven');



if (require.main === module) {
  console.log('Running sanity checks for every:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(every([2,3,5,7,11], isPrime) === true);
  console.log(every([-1,2,4,-2,7], isPositive) === false);
  console.log(every([1,3,5,7,9], isEven) === false);
}

module.exports = every;
