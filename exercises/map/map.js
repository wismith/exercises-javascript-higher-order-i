/**
 * Constructs and returns a new array with`fn` to each element of `collection`.
 *
 * In general,
 *
 * ```
 * map([val1, val2, ..., valN], fn); // => [fn(val1), fn(val2), ..., fn(valN)]
 * ```
 *
 * @example
 * function double(x) {
 *   return x * 2;
 * }
 *
 * map([1, 2, 3, 4], double); // => [2, 4, 6, 8];
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} fn - A function that returns `true` or `false`
 * @returns {any[]} A new array constructed by applying `fn` to each
 *  element of `collection`
 */
function map(collection, fn) {
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  let results = [];

  for (let item of collection) {
    results.push(fn(item));
  }

  return results;
}

let primeFactors = require('/Users/willsmith/Desktop/exercises-javascript-fundamentals/exercises/numbers/primeFactors/primeFactors');
let isEven = require('/Users/willsmith/Desktop/exercises-javascript-fundamentals/exercises/numbers/isEven/isEven');
let capitalize = require('/Users/willsmith/Desktop/exercises-javascript-fundamentals/exercises/strings/capitalize/capitalize');


if (require.main === module) {
  console.log('Running sanity checks for map:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(map([6,12,15,24],primeFactors));
  console.log(map([1,2,3,4,5,6,7,8,9,10], isEven));
  console.log(map(['hello', 'will', 'davidson'], capitalize));
}

module.exports = map;
