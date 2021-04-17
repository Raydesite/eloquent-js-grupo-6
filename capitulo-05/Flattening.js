/*
 * Flattening
 * Use the reduce method in combination with the concat
 * method to “flatten” an array of arrays into a single
 * array that has all the elements of the original arrays.
 */

let arrays = [[1, 2, 3], [4, 5], [6], 7, 8, 9]
// Your code here.
// → [1, 2, 3, 4, 5, 6]
let result = arrays.reduce(
  (acc, actual) => {
    return acc.concat(actual)
  }, [])

console.info('Con reduce', result)

arrays = [[1, 2, 3], [4, 5], [6], 7, [[8, 9, [10, 11]]], 9]
result = arrays.flat(Infinity)
console.info('Con flat', result)
