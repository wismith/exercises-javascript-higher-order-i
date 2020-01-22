/**
 * Iterates over `collection`, constructing and returning a new array containing
 * the elements of `collection` for which `predicate` returns `false`.
 *
 * This is the opposite of `select`.
 *
 * @example
 * reject([1, 2, 3, 4, 5, 6], isEven); // => [1, 3, 5]
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} predicate - A function that returns `true` or `false`
 * @returns {array} A new array containing the elements of `collection`
 *   for which `predicate` returns `false`
 */
function reject(collection, predicate) {
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

  let results = [];

  for (let item of collection) {
    if (!predicate(item)){
      results.push(item);
    }
  }

  return results;
}

let isEven = require('/Users/willsmith/Desktop/exercises-javascript-fundamentals/exercises/numbers/isEven/isEven');
let isPowerOfTwo = require('/Users/willsmith/Desktop/exercises-javascript-fundamentals/exercises/numbers/isPowerOfTwo/isPowerOfTwo');
let isPrime = require('/Users/willsmith/Desktop/exercises-javascript-fundamentals/exercises/numbers/isPrime/isPrime');


if (require.main === module) {
  console.log('Running sanity checks for reject:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?


  console.log(reject([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], isEven));
  console.log(reject([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], isPowerOfTwo));
  console.log(reject([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], isPrime));
}

module.exports = reject;
