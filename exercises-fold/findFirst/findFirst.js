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
  return fold(collection, function(acc,item){
    if (!acc && predicate(item)){
      acc = item;
    }
    return acc;
  }, undefined);
}

function isEven(n){
  return n % 2 === 0;
}
function isPositive(n){
  return n > 0;
}

function fold(collection, fn, init){
  let acc = init;
  for (let item of collection){
    acc = fn(acc, item);
  }
  return acc;
}

if (require.main === module) {
  console.log('Running sanity checks for findFirst:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  // How can you be sure it's returning the FIRST thing it finds? Does it matter?

  console.log(findFirst([1,2,3,4], isEven) === 2);
  console.log(findFirst([-3,-5,0,1], isPositive) === 1);
}

module.exports = findFirst;
