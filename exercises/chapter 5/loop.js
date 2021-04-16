// Your code here.
function loop(start, condition, updated, f){
  let value = start
  while (condition(value)){
    f(value)
    value = updated(value)
  }
}

loop(5, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1