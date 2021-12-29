// 类数组

var obj = {
  0: 'aven',
  1: 'kvetn',
  2: 'maci',
  3: 'canci',
  length: 4,
}
// 形似这种格式的为类数组 键名为数字，并且带有length属性
// ! length 的长度必须和键值对个数一致，若不一致，转化为数组的时候
// ! 若length长度小，则截取一部分， 若length长度大，则多出来的为undefined

// 1. 继承数组方法 / 显示机制
// 类数组实际上就是一个对象 控制台显示的就是个对象{} 若要我们显示为中括号[]的形式
// 只需要在对象里添加splice方法继承Array的splice即可
// 这其实是浏览器的 显示机制罢了
obj.splice = Array.prototype.splice
/*
  控制台打印
  Object(4) ['aven', 'kvetn', 'maci', 'canci', splice: ƒ]
*/

// !若要给类数组添加push方法，同理也是给其添加数组的push方法即可操作啦


// 2. 转类数组的方法
// slice Array.from 解构赋值
let arr1 = Array.prototype.slice.call(obj)
let arr2 = Array.from(obj)
// !此种转化需有迭代器 Symbol.iterator才行
let arr3 = [...obj]


// 类数组 hash判断去重
var obj = {}
var arr = [3,3,3,'a',1,'4','a',11,1,3,'4',4,4,'1',9,9,0]
function repeatM(arr) {
  let newArr = []
  let obj = {}
  arr.forEach(item=> {
    if(obj.hasOwnProperty(item)) {
      let repeate = false
      newArr.forEach(newItem=> {
        if(item === newItem) {
          repeate = true
        }
      })
      if(!repeate) {
        newArr.push(item)
      }
    } else {
      obj[item] = true
      newArr.push(item)
    }
  })
  return newArr
}
