function everyLoop(array, test) {
  for(i = 0; i < array.length; i++){
    if(test(array[i])) continue
    
    return false
  }
  
  return true
}

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true

console.log("some version:")

function everySome(array, test){
  return !array.some((n) => !test(n))
}

console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));