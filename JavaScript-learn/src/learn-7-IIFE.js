// 自动执行 执行完后立即销毁释放
// 立即执行函数 - 初始化函数
// IIFE - immediately invoked function expression

(function(){

})();

(function(){

}());

// 1. 可有返回值
var num  = (function(a, b){
  return a + b
})(1, 2);

// 2. ()括号括任何东西，都变成表达式， 所以可以直接执行
// 一定是表达式才能够被直接执行
(function(){})();
(function(){}());
var test = function(){} ()
(function test(){})() // 实际上把函数声明变成了表达式 里面的函数名会被自动忽略

// 下面的也一样使得函数声明变成表达式
// 函数声明变成表达式的方法 + - ！ || && 
+ function test() {}();
- function test() {}();
1 && function(){}();
0 || function(){}()

// 经典必包问题
function test() {
  var arr = []
  for(var i = 0;i < 10;i++) {
    // IIFE arr里的函数 引用的都是这个IIFE的AO
    (function(j){
      arr[j] = function() {
        console.log(j)
      }
    })(i)   
  }
  return arr
}


// !example
function foo(x) {
  console.log(arguments);
  return x  
}(1, 2)

// 实际上上面是分开的
function foo(x) {
  console.log(arguments);
  return x  
}
(1, 2)

// 所以在控制台会输出最后一个 2
// 如果什么都不填的话就会报错，系统默认()应该为表达式
// function foo(x) {
//   console.log(arguments);
//   return x  
// }()

