let target = {
  name: "aven",
  age: 12,
  like: {
    sport: '篮球',
    food: '火锅'
  },
  son: ['maji', 'bili']
}

let cloneTarget = deepClone(target)
cloneTarget.name = 'json'
cloneTarget.like.food = '大蒜'
cloneTarget.son.push('joti')
console.log(target, cloneTarget);

function deepClone(origin) {
  if(typeof origin !== 'object') {
    return origin
  }
  let tar = origin instanceof Array ? [] : {}
  for(let key in origin) {
    tar[key] = deepClone(origin[key])
  }
  return tar
}