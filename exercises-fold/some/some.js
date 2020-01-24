/**
 * Checks if `predicate` returns `true` for **any** element of `collection`.
 *
 * @example
 * some([1, 2, 3, 4, 5, 6], isEven); // => true
 * some([2, 4, 6, 8], isEven);       // => true
 * some([1, 3, 5], evenEven);        // => false
 *
 * @param {any[]} collection - An array containing anything
 * @param {function} predicate - A function that returns `true` or `false`
 * @returns {boolean} Returns `true` if `predicate` is `true` for any
 *  element of `collection` and `false` otherwise.
 */
function some(collection, fn) {
  return fold(collection, function(acc,item){
    if (fn(item)){
      acc = true;
    }
    return acc;
  },false);
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
  console.log('Running sanity checks for some:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(some([1,2,3,4,5,6],isEven) === true);
  console.log(some([-1,4,0,-5,7],isPositive) === true);
  console.log(some([1,3,5,7],isEven) === false);
  console.log(some([-1,-2,0,0], isPositive) === false);
}

module.exports = some;
