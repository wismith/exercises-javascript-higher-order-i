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
function maxBy(collection, fn) {
  return fold(collection,function(acc,item){
    if (!acc){
      acc = collection[0];
    }
    if (fn(item) > fn(acc)){
      acc = item;
    }
    return acc;
  }, undefined);
}

function strLength(str){
  return str.length;
}

function square(n){
  return n*n;
}



function fold(collection, fn, init){
  let acc = init;
  for (let item of collection){
    acc = fn(acc, item);
  }
  return acc;
}

if (require.main === module) {
  console.log('Running sanity checks for maxBy:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  // How can you be sure it's returning the FIRST thing it finds? Does it matter?

  console.log(maxBy(['hello', 'friend', 'how', 'are', 'you'],strLength) === 'friend');
  console.log(maxBy([1,5,3,4,2],square) === 5);
}

module.exports = maxBy;
