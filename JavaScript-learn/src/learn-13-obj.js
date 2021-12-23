// 主题：对象属性遍历 this caller callee

// 1. 属性访问 .语法
var person = {
  name: 'aven'
}

person.name // aven
// 实际上内部是 person.name -> person['name'] 



// 2. hasOwnProperty 只要实例上的属性



// 3. instanceof 判断一个对象的原型链上是否包含 一个构造函数

function Person() {}
function Student() {}
Student.prototype = Object.create(Person.prototype)
let student = new Student()
console.log(student instanceof Person); // true

// 4. 判断 类型的几种方法
let a = []
a.constructor.name // Array
a instanceof Array // true
Object.prototype.toString.call(a) // '[object Array]'

// ! 5. 函数内部的this

function test(b) {
  this.d = 3;
  var a = 1;
  function c() {}
}

test(123)
/* 预编译 其中没有实例化this，默认this指向window
  AO = {
    arguments: [123]
    this: window
    b: 123
    a: undefiend
    c: function c(){}
  }
*/


function Test(b) {
  // var this = {
  // __proto__: Test.prototype 
  // }
  this.name = b
}
var test = new Test('123')

/* 预编译 实例化this
  AO = {
    arguments: ['123']
    this: {
      __proto__: Test.prototype,
      name: '123'
    }
  }
*/


// ! callee 、 caller
var count = (function(n) {
  if(n <= 1) {
    return 1
  }
  return n + arguments.callee(n - 1)
})(10);

function test1() {
  test2()
}
function test2() {
  console.log(test2.caller)
}

test1() // test1(){...}

// ⚠️ tips 严格模式下不能用 caller callee arguments


// !typeof

var f = (
  function a() {
    return 1
  },
  function b() {
    return 2
  }
);
typeof f // 'function'

var f = (
  function a() {
    return 1
  },
  function b() {
    return 2
  }
)();
typeof f // 'number'