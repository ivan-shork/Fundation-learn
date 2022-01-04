//  Arguments 对象

/*
  函数内部对应参数的实参列表，它是函数内置的局部变量
  !一个类数组对象 {
    index属性下标
    length
    没有数组的内置方法 build-in methods/object
  } array like
  可迭代
*/

function test() {
  console.log(arguments.toString()); // [object Arguments]
  console.log(Array.isArray(arguments)); // false
  
  for(let arg of arguments) {  // 可迭代
    console.log(arg);
  }
  
}


// 1. 箭头函数 没有arguments
var test = (...args)=> {
  console.log(args); // 一般用...args 来应对不定参数的情况 ES6开始弱化arguments的引用
  console.log(arguments); // arguments is not defiened
}

// 2. arugments 不要泄露或暴露出去 优化杀手 会阻止js引擎做一些特定的优化
// github.com/petkaantonov/bluebird/wiki/Optimization-killers
function test() {
  // 1. return arguments
  // 2. var args = [].slice.call(arguments)
  // 3. var a = arguments; return function(){ return a }

  // !可以使用如下方式转数组 不用slice
  var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
}


// 2. 形参 实参 对应关系 
function test(a) {
  /*
    形参 实参 在默认情况下会有对应关系
    但是在 默认值 不定参数 解构赋值下 这种对应关系会失效
  */
  arguments[0] = 10
  console.log(arguments[0], a); // 10, 10 

  a = 100
  console.log(arguments[0], a); // 100, 100
}

// 2. 1）默认值
function test(a = 100) {
  arguments[0] = 10;
  // !形参但凡有一个参数有默认值， arguments都不会对应形参
  // !记得 但凡有一个
  console.log(a, arguments[0]); // 1 10
}
test(1) // 1 10

function testArgs(a, b, c = 10) {
  arguments[0] = 100
  arguments[1] = 200
  arguments[2] = 300

  console.log(a, aguments[0]); // 1, 100
  console.log(b, aguments[1]); // 2, 200
  console.log(c, aguments[2]); // 3, 300
  
}
testArgs(1, 2, 3)
// 有一个参数是默认值， arguments和形参不对应

// 2. 2）不定参数
// !由此可以看出es6在弱化arguments
function testArgs(...args) {
  arguments[0] = 100
  arguments[1] = 200
  arguments[2] = 300

  console.log(args[0], aguments[0]); // 1, 100
  console.log(args[1], aguments[1]); // 2, 200
  console.log(args[2], aguments[2]); // 3, 300
  
}
testArgs(1, 2, 3)

// 2. 3）解构赋值
// !由此可以看出es6在弱化arguments
function testArgs({a, b, c}) {
  arguments[0] = 100
  arguments[1] = 200
  arguments[2] = 300

  console.log(args[0], aguments[0]); // 1, 100
  console.log(args[1], aguments[1]); // 2, 200
  console.log(args[2], aguments[2]); // 3, 300
  
}
testArgs({a: 1, b: 2, c: 3})


// 3. 严格模式下不映射
function test(a, b, c) {
  'use strict'
  arguments[0] = 100
  arguments[1] = 200
  arguments[2] = 300

  console.log(a, b, c); // 1, 2, 3
  console.log(arguments); // 100, 200, 300
}
test(1, 2, 3)