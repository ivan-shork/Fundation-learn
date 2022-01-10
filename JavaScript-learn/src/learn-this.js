// this 指向
// !this 函数内部的一个执行期上下文指向


// 1. 严格模式下
function test() {
  'use strict'
  console.log(this);
  // this 的值为undefined
}

// 2. 谁调用指向谁
var obj = {
  test
}
obj.test() // obj { }

// 3. new调用
function test() {
  console.log(this);
}

var t = new test() // test1 {} 当前的t实例

// 实际上new同我们之前说的一样，会在执行内部隐式地创建一个对象，
// 然后将this指向这个对象，最后再返回

// 4. 非箭头函数在非严格模式下自调用，this一般指向window
function test(callback) {
  callback()
}
test(function() {
  console.log(this);
})

// 5. 严格模式下全局箭头函数指向都是window
'use strict'
var test = ()=> {
  console.log(this);
}

// 6. 箭头函数this指向上层父级作用域的this (为了解决以前this指向不稳定的问题)
var obj = {
  test: ()=> {
    console.log(this);
  }
}

obj.test() // window

var obj = {
  test() {
    var test1 = ()=> {
      console.log(this);
    }
    test1()
  }
}

obj.test() // obj {}