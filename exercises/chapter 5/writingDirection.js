function charDirection(code){
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script.direction;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c[0] == name);
    if (known == -1) {
      counts.push([name, 1]);
    } else {
      counts[known][1]++;
    }
  }
  return counts;
}

function dominantDirection(text) {
  let directions = countBy(text, char => {
    return charDirection(char.codePointAt(0))
  }).filter(([name]) => name != null)
  
  let max = directions.reduce((acc, current) => {
    return acc[1] > current[1] ? acc : current
  })
  
  return max[0]
}


console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl