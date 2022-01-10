// Array.prototype.entries

var arr = [1, 2, 3, 4, 5]
var entries = arr.entries()
// Array Iterator {} 其实返回的就是一个数组的迭代器对象
// next() -> { value: [index, value], done: false | true }


// 1. for of for in
for(let i in arr) {
  // for in 中的迭代器返回的是索引
}

for(let v of arr) {
  // for of 中的迭代器返回的是值
}

// ! 2. 给对象添加迭代器 
// 此处形如 [].entries 这个方法, 因为next中value返回的值为[index, value]
Object.prototype[Symbol.iterator] = function() {
  let keys = Object.keys(this),
     _this = this,
    index = -1,
    len = keys.length

  return {
    next() {
      index++;
      return {
        value: [keys[index] ,_this[keys[index]]],
        done: index > len - 1
      }
    }
  }
}

// 最简单的方法
Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]


// 3. 二维数组排序
var newArr = [[3, 1, 42, 2], [33, 22, 11], [6, 2]]
for(let arr of newArr) {
  arr.sort((a, b)=> a - b )
}
console.log(newArr);


