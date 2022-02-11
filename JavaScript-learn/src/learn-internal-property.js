// 内部特性 底层的插槽 [[]]
// 这些被包裹起来的属性，是底层的一些特性，它描述了一些类型或内置对象的特性

1 -> 原始值
为啥底层知道这是个原始值呢，因为底层有个[[PrimitiveValue]]这个插槽，
其中又分string number ...

var o = {}
typeof o 
为什么是object呢， 那是因为底层有个[[object]]的插槽

var a = 1
a()
// a is not a function
为什么这样报错呢，因为底层没有[[Call]]这个插槽
函数之所以是函数，之所以能被调用 是因为底层有[[Call]]这个插槽

var test = ()=> {}
new test()
// test is not a constructor
为什么这样报错呢，因为底层没有[[Constructor]]这个插槽，没办法做构造函数

[[Prototype]] 原型特性
注意和__proto__区分，__proto__是一个原型的引用。


[[scope]]作用域链