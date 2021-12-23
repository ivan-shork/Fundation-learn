// 逻辑运算

// 1. + 数学运算 字符串拼接
var a = 5,
    b = 2,
    c;

// 任何数据类型的值 + 字符串 都是字符串拼接
c = 1 + "str" // "1str"
c = "str" + (1 + 1) // "str2"
c = 1 + 1 + "str" // "2str"
c = "str" + null // "strnull"
c = "str" + undefined // "strundefined"
c = "str" + NaN // "strNaN"
c = "str" + true // "strtrue"
// !若是与引用类型相加 一般会先应用该类型的valueOf值，如果valueOf是原始值类型，则使用它
// !否则默认使用对象的toString方法的返回值
var d = {
  name: "aven",
}
c = "str" + d // "str[object Object]"
var d = {
  name: "aven",
  valueOf() {
    return 1
  }
}
c = "str" + d // "str1"

// 2. /
1 / NaN, NaN / NaN //任何数 / NaN 都为NaN
0 / 0 // NaN
1 / 0 //! Infinity 正无穷
-1 / 0 //! -Infinity 负无穷

// 3. ++ --
var a = 1;
console.log(a++); //先打印a 后运算
console.log(++a);
console.log(a = a + 1)


var a = 5,
    b;

b = a++ + 1;
console.log(a, b); // 6,6

// !相当于 a-- 移动到后面去
b = a-- + --a;
console.log(a, b); // 3,8

b = a + --a; // 5 + 4
console.log(a, b); // 4,9


// !相当于 a++ 移动到后面去
b = a++ + ++a;
console.log(a, b); // 7,12


b = --a + --a
console.log(a, b); // 3,7

// 4. compare 比较

// string 比 number string会转换成number
var bool = '2' < 3 // false
// string 比 string 从左到右比拼ASCII码（字符相对应的十进制码）
var bool = '2.5' > '12' //true 此处ASCII(2) > ASCII(1)

// 与true比较
// !不管与number比较还是string比较 都会先转化成0或1
1 == true, 0 == false, '2' > true, '-1' < false // true
'mask' == true //false 显然 'mask' != 1
!!'mask' == true // true

// true与对象的博弈
// !根据valueOf来判断
var a = {}
a == true // false 
a = {
  valueOf() {
    return '1'
  }
}
a == true // true

NaN == NaN // false


// 5.逻辑运算
// && || !
// undefined, null, NaN, "", 0, false 除这些外全都是假

// ! && 当走到假时或走到最后时 返回值
var a = 1 && 2 && 3;
console.log(a); // 3
var a = 0 && 2 && 3;
console.log(a); // 0

// ! || 当走到真或者走到最后时 返回值
var b = 0 || false || 1 || 2;
console.log(b); // 1
var b = 0 || undefined || false || 2
console.log(b); // 2

