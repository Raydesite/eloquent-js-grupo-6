/*
Everything
Analogous to the some method, arrays also have an every
method. This one returns true when the given function
returns true for every element in the array. In a way,
some is a version of the || operator that acts on
arrays, and every is like the && operator.

Implement every as a function that takes an array and
a predicate function as parameters. Write two versions,
one using a loop and one using the some method.

function every(array, test) {
  // Your code here.
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

 */
let arr0 = [1, 3, 5]
let arr1 = [2, 4, 16]
let arr2 = []

function every (array, test) {
  for (const element of array) {
    if (!test(element)) {
      return false
    }
  }
  return true
}

function every2(array, test) {
  return !array.some(n => !test(n))
}

const every3 = (array, test) => !array.some(element => !test(element));

console.info(every2(arr0, n => n < 10))
console.info(every2(arr1, n => n < 10))
console.info(every2(arr2, n => n < 10))

