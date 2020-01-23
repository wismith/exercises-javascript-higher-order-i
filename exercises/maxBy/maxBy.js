/**
 * Given a `collection` and a function `fn`, returns the **largest** element of `collection`
 * ranked by `fn`.
 *
 * For example, if `fn(string)` returns the length of `string` then `maxBy` would return
 * the longest string in the collection.
 *
 * @example
 * function strLength(str) {
 *   return str.length;
 * }
 *
 * maxBy(['a', 'bb', 'cccc', 'ddd'], strLength); // => 'cccc'
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} fn - A function that returns a `number`
 * @returns {any} The element `x` in `collection` with the largest value of `fn(x)`.
 */
function maxBy(collection, predicate) {
  let runningLargest = collection[0];
  for (let item of collection){
    if (predicate(item) > predicate(runningLargest)){
      runningLargest = item;
    }
  }
  return runningLargest;
}

function strLength(str){
  return str.length;
}

let primeFactors = require('/Users/willsmith/Desktop/exercises-javascript-fundamentals/exercises/numbers/primeFactors/primeFactors');

function numPrimeFactors(num){
  return primeFactors(num).length;
}

if (require.main === module) {
  console.log('Running sanity checks for maxBy:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  // How can you be sure it's returning the FIRST thing it finds? Does it matter?

  console.log(maxBy(['hello', 'hi', 'what', 'I'], strLength) === 'hello');
  console.log(maxBy([6,12,9,24], numPrimeFactors) === 24);
}

module.exports = maxBy;
