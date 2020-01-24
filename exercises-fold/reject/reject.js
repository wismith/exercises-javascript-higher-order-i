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
function reject(collection, fn) {
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

  return fold(collection, function(acc,item){
    if (!fn(item)){
      acc.push(item);
    }
    return acc;
  },[]);
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
  console.log('Running sanity checks for reject:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(reject([1,2,3,4,5,6],isEven));
  console.log(reject([-1,4,0,-5,7],isPositive));
}

module.exports = reject;
