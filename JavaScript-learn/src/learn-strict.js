// !严格模式 正常模式 (ie9及以下不支持)
// ES5开始有严格模式
// 'use strict'
// !为啥用字符串， 因为字符串就是一个表达式，计算没有支持这个严格模式，也不会报错！

// 模块中使用全局模式
// 一般在模块中使用，而不在全局中添加 
function test() {
  'use strict'
}
;(function(){
  'use strict'
})();


// !严格模式中不能使用的
// --- 1. with改变作用域
// --- 2. 重复声明变量
// --- 3. arguments.callee/caller 不可以用
// --- 4. 必须声明变量 a = 1 报错
// --- 5. 默认this不再指向window 必须要赋值 否则为undefined
// --- 6. 函数的参数名不能重复 function test(a, a){}
// --- 7. 对象的属性名不能重复 不报错 但是不允许这么做
//     var obj = {a: 1, a: 2}
// --- 8. eval()
//     eval('var a = 1; console.log(a)')  // 1
//     console.log(a) // 报错 a is not defined
//     严格模式下eval的变量不会渗透到全局的 有自己的作用域