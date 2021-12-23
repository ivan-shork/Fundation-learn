// 初始化参数
// 没有默认值 则默认值是undefined
function test(a = 1, b) {
  console.log(a, b); // 1 undefiend
}

test(undefined, 2) // 1, 2

// 总结 arguments实参 和 形参 哪个非undefiend 就用哪个



// 函数声明是整体提升 变量只有声明提


console.log(a);
var a = 1;

test()
function test(){
  console.log(1);
}



// AO 函数上下文
// 1. 寻找形参和变量声明
// 2. 形参赋值
// 3. 寻找函数声明 赋值
// 4. 执行函数体


// GO 全局上下文
// 1. 寻找变量声明
// 2. 寻找函数声明 赋值
// 3. 执行赋值动作

// 变量声明只要有就会提升
// 预编译的时候 没执行 只看代码里有没有变量声明
function test() {
  console.log(b);
  if(a) {
    var b = 2
  }
  // 这里虽然if还未执行 但是b也会继续被提升
}

a = 1
test() // undefined


function test() {
  function e() {}
  arguments[0] = 2;
  console.log(e);
  if(a) {
    var b= 3
  }
  var c;
  a = 4;
  var a;
  console.log(b);
  f = 5;
  console.log(c);
  console.log(a);
}

// func undefiend undefiend 4


// ?example
var x = 1,
    y = z = 0;

function add(n) {
  return n = n + 1;
}

y = add(x)

function add(n) {
  return n = n + 3;
}

z = add(x)

console.log(x, y, z); 

// GO = {
//  x: 1
//  y: 0
//  z: 0
//  add: function add(n) {return n = n + 1} -> 替换 function add(n){return n = n + 3}
//  }



