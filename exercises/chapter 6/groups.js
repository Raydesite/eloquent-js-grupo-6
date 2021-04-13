class Group {
  constructor(){
    this.group = []
  }

  add(value){
    if(this.group.indexOf(value) === -1){
      this.group.push(value)
    }
  }

  delete(value){
    this.group = this.group.filter(e => e !== value)
  }

  has(value){
    return this.group.indexOf(value) !== -1
  }

  get(index){
    return this.group[index];
  }

  get length(){
    return this.group.length
  }

  static from(iterable){
    let group = new Group()
    for (let value of iterable){
      group.add(value)
    }
    return group
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}

class GroupIterator {
  constructor(group){
    this.count = 0
    this.group = group
  }

  next(){
    if (this.count == this.group.length) return {done: true}

    let value = this.group.get(this.count)
    this.count++

    return {value, done: false}
  }
}

console.log("Part 1")
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

console.log("Part 2")
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
