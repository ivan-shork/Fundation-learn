var fn = (
  function test1() {
    return 1
  },
  function test2() {
    return '1'
  }
)();

console.log(typeof fn);

// 此处同 (1, 2) 返回 2 一样，这种js看成一个表达式，并且返回最后一个的值
var a = 10
if(function b(){}) {
  a += typeof(b)
}
console.log(a); // 10undefiend

//! (function() b{}) 这种被默认当成表达式 函数名会被忽略 


// !函数表达式会忽略函数的名字 实际上就是赋值了一个匿名函数
var test = function a() {
  return 'a'
}
typeof a // undefiend

var test = function a() {
  a() // 可以执行
}