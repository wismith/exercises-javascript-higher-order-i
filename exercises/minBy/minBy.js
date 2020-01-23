/**
 * Given a `collection` and a function `fn`, returns the **largest** element of `collection`
 * ranked by `fn`.
 *
 * For example, if `fn(string)` returns the length of `string` then `minBy` would return
 * the shortest string in the collection.
 *
 * @example
 * function strLength(str) {
 *   return str.length;
 * }
 *
 * minBy(['a', 'bb', 'cccc', 'ddd'], strLength); // => 'a'
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} fn - A function that returns a `number`
 * @returns {any} The element `x` in `collection` with the smallest value of `fn(x)`.
 */
function minBy(collection, fn) {
  
  let runningSmallest = collection[0];
  for (let item of collection){
    if (fn(item) < fn(runningSmallest)){
      runningSmallest = item;
    }
  }
  return runningSmallest;
}

function strLength(str){
  return str.length;
}

let primeFactors = require('/Users/willsmith/Desktop/exercises-javascript-fundamentals/exercises/numbers/primeFactors/primeFactors');

function numPrimeFactors(num){
  return primeFactors(num).length;
}

if (require.main === module) {
  console.log('Running sanity checks for minBy:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  // How can you be sure it's returning the FIRST thing it finds? Does it matter?

  console.log(minBy(['hello', 'hi', 'I', 'playing'], strLength) === 'I');
  console.log(minBy([4,8,12,24,16], numPrimeFactors) === 4);
}

module.exports = minBy;
