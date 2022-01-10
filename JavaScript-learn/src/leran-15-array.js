// 本期主题：数组

// 1. 声明方式
var arr1 = [] // 字面量
var arr2 = new Array() // 不推荐
var arr3 = Array() // 不使用

// 同对象一样
var obj1 = {}
var obj2 = new Object()
var obj3 = Object()

// 2. 数组底层的机制

var arr = [1, 2, 3, 4]

var obj = {
  0: 1,
  1: 2,
  2: 3,
  3: 4
}

// 实际上， 在js底层中，数组的索引就是健名
// ! 数组就是另外一种对象的形式 因为同对象的访问机制是一样的 一切皆对象！
// ! 事实上，数组里的访问键值都会被转化为字符串，形如arr[1] 实际上底层是 arr["1"], 因为对象就是这样的：obj.name -> obj["name"]

// 3. 空 empty 未定义（未赋值）
// 最后一位的空值 系统是不算的，没有用，而前面的空值会算
var arr1 = [,,]
arr1.length // 2
var arr2 = [,2,3,]
arr2.length // 3

// 4. 稀松数组
// !请注意， 稀松数组中的empty项，实际上就是没有值，for of可以遍历他们， 但是map，forEach等方法就不行
// !没有值和undefined是不同的，没有值即为定义，我们可以通过形如 2 in arr来判断
var arr = [,1,3,,,,4,8]

// 5. new Array初始化数组
var arr = new Array(5)
arr // [empty * 5] 实际上构造出这种值[,,,,,]

// !6 数组push pop shift reverse map 等等的方法都来自Array.prototype上 是继承的 

// 6. push unshift 
// 返回值 执行了方法以后的数组的长度
var arr = [1, 2, 3]
arr.push(4) // 4
arr.push(4, 5, 6) // 7 !记住 可以push多个


// !7. 重写push方法
Array.prototype.myPush = function(...arr) {
  // 也可以使用arguments
  let argsLen = arr.length
  for(let i = 0;i<argsLen;i++) {
    this[this.length] = arr[i]
  }
  return this.length
}

// 8. pop shift 返回弹出的值
var arr = ['a', 'b', 'c']
arr.pop() // 'c'
arr.shift() // 'a'

// 9. splice 
// !splice剪切长度为0的时候 添加值到前面
var arr = [2, 3, 4]
arr.splice(0, 0, 11) // [11, 2, 3, 4]
arr.splice(2, 0, 44) // [2, 3, 44, 4]

// 10. splice 负值 
// 从最后一位开始为 -1 
var arr = [1, 2, 3]
arr.splice(-1, 1, 22) // [1, 2, 22]


// 11. sort 函数
var arr = [22, 49, 5, 7]
// 默认它是根据ASCII码来排序的
arr.sort() // [22, 49, 5, 7]

// 返回值：1. 负值， a就排前面
//        2. 正值， b就排前面
//        3. 0， 保持不动
arr = [22, 49, 5, 7]
// sort 实际上是冒泡排序的过程
      /*
        27 49
        5 27
        7 27
        5 49
        7 49
        5 7
      */
    
// 倒序
arr.sort(function(a, b){
  if(a > b) {
    return -1
  } else {
    return 1
  }
})
// 另一种写法
arr.sort((a, b)=> b - a)



var arr = [
  {
    name: 'aven',
    age: 22
  },
  {
    name: 'joyi',
    age: 11
  },
  {
    name: 'canci',
    age: 32
  },
  {
    name: 'bruce',
    age: 10
  },
  {
    name: 'keven',
    age: 26
  },
]


// !随机排序
arr.sort(function(a, b){ 
  var rand = Math.random()
  if(rand > 0.5) {
    return 1
  } else {
    return -1
  }

  // return Math.random() - 0.5
})






