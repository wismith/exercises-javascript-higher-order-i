/**
 * Iterates over the elements of `collection`, returning the first element
 * for which `predicate` returns `true`. If no such element is found, returns
 * `undefined`.
 *
 * @example
 * findFirst([1, 2, 3, 4, 5, 6], isEven); // => 2
 *
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} predicate - A function that returns `true` or `false`
 * @returns {any} The first element of `collection` for which `predicate`
 *  returns `true` or `undefined` if nothing is found.
 */
function findFirst(collection, predicate) {
  for (let item of collection){
    if (predicate(item)){
      return item;
    }
  }
  return undefined;
}

let isPrime = require('/Users/willsmith/Desktop/exercises-javascript-fundamentals/exercises/numbers/isPrime/isPrime');
let isOdd = require('/Users/willsmith/Desktop/exercises-javascript-fundamentals/exercises/numbers/isOdd/isOdd');

if (require.main === module) {
  console.log('Running sanity checks for findFirst:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  // How can you be sure it's returning the FIRST thing it finds? Does it matter?

  console.log(findFirst([4,6,8,9,10,11], isPrime) === 11);
  console.log(findFirst([4,6,8,9,10,11], isOdd) === 9);
}

module.exports = findFirst;
