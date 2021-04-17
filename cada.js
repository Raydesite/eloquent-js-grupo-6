function cada(array, test) {
  return array.every(test)
}

function cada1(array, test) {
  let c = true;
  for (let a of array) {
    if (!test(a)) c = false;
  }
  return c;
}

console.log(cada1([1, 3, 5], n => n < 10));
// → true
console.log(cada1([2, 4, 16], n => n < 10));
// → false
console.log(cada1([], n => n < 10));
  // → true