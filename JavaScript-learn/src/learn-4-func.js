// 函数声明
function test() {
  var a = 1,
      b = 2;
}

// 字面量写法
var test = function test1() {
  
  test1() // 在内部可以调用， 递归

}

// 匿名函数表达式 其实同上面一样的
var test = function() {

}

test.name // test1

test1() // not defined

// 函数被赋值给了test这个变量，这个过程 test1 是被自动忽略的，相当于匿名函数。 所以在外面访问不到


// 函数体
// 1. 函数名 参数（可选）返回值（不一定） return（一定有）
// 若没写return 系统是会在调用时加上return的

            // a, b 在函数定义时只是个占位符， 称形参数
            // 调用的时候 a, b被赋值，此时传进来的值为实参
function test(a, b) {

}

// 获取实参
function test(a, b) {
  console.log(arguments);
}

test(1, 2, 3) // [1, 2, 3]
test.length // 获取形参的长度 


// 更改实参
function test(a, b) {
  a = 3;
  console.log(arguments[0]); // 3
}

test(1, 2)


// 更改没有赋值的形参， 打印实参
function test(a, b, c) {
  c = 3
  console.log(arguments[2]); // undefined
}

test(1, 2)

// 实际上， 形参和实参对应的值不是相等的（如 arguments[0] 是 不等于a的）， 而是系统内部建立了一个映射关系
// 如若此时我们改变一个没有赋值的形参， 此时因为没有被映射到（调用时没有赋值  ）， 所以自然变化不会同步到实参中去


