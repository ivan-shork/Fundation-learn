let target = {
  name: "aven",
  age: 12,
  like: {
    sport: '篮球',
    food: '火锅'
  },
  son: ['maji', 'bili'],
  sayHello() {
    console.log('hallo, my name is' + this.name)
  },
  num: new Number(22),
  count: new String('hhhh')
}

let cloneTarget = deepClone(target)
cloneTarget.sayHello = function () {
  console.log('hi, my name is' + this.name);
}
target.sayHello()
cloneTarget.sayHello()
console.log(target, cloneTarget);



function deepClone(origin) {
  if(typeof origin !== 'object') {
    return origin
  }
  if(origin instanceof Function) {
    return origin.bind()
  }
  if(origin instanceof RegExp || origin instanceof Number 
    || origin instanceof String) {
    return new origin.constructor(origin.valueOf())
  }
  let tar = origin instanceof Array ? [] : {}
  for(let key in origin) {
    tar[key] = deepClone(origin[key])
  }
  return tar
} 