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
  return fold(collection, function(acc,item){
    return acc && predicate(item);
  },true);

  
}

function fold(collection, fn, init){
  let acc = init;
  for (let item of collection){
    acc = fn(acc, item);
  }
  return acc;
}

function isEven(n){
  return n % 2 === 0;
}

function isPositive(n){
  return n > 0;
}
if (require.main === module) {
  console.log('Running sanity checks for every:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(every([1,2,3,4],isEven) === false);
  console.log(every([1,2,3,4], isPositive) === true);
}

module.exports = every;
