// 包装类

// ? 原始值包装的过程
var a = 123; // 原始值
a.len = 3;
// 初始化原始值
// 给原始值赋值 len 属性， 系统发现后，会自动帮我们转成包装类，内部给new Number(a) 然后再 赋值len属性
// 但是系统发现没有地方保存这个包装类变量（总不可能新生成一个变量帮我们保存） 所以他就删了这个属性 delete a.len


// ? 原始值包装 （String）
var str = 'aaa'
str.length // 3
// 实际上，系统发现我们引用 length 属性， 所以它new了一个String对象，new String(str)
// 这时候读取length属性，所以就有了

// ?为何str.length 改不了
var str = 'bbb'
str.length // 3
str.length = 1
console.log(str, str.length); // 'bbb' 3

// 实际上 第三步的赋值 同第一个例子一样，他发现new的那个String 对象，没地方保存，所以delete掉了
// 然后第四部访问str.length 又新生成了一个包装对象，然后读取length属性

