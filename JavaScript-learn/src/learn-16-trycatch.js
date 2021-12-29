// 1. 错误类型

//  -1 SyntaxError 语法错误
//  --- 变量名不规范 var 1 = 1  function 1ab(){}
//  --- 关键字赋值 new = 5 function = 5
//  --- 基本的语法错误 var a = 5;

//  -2 ReferenceError 引用错误
//  --- 变量或者函数未声明 test() test is not defiened console.log(a)
//  --- 给无法被赋值的对象赋值的时候 var a = 1 = 2; Invalid lefthand side 赋值的左侧无效

//  -3 RangeError 范围错误
//  --- 数组长度赋值为负数 
//      var arr = [] arr.length = -1
//  --- 对象方法参数超出可行范围
//      var num = 66.6 num.toFixed(-1)

//  -4 TypeError 类型错误
//  --- 调用不存在的方法
//      123() 123 is not a function 
//      var obj = {}; obj.say(); obj.say is not a function
//!     var obj = {}; obj.say 不会报错
//!     如果没加 括号，js会认为这是个属性，只是没有赋值，但是一旦加了括号，他就会认为执行属性是一个错误。
//  --- 实例化原始值 var a = new "string"   'string' is not a constructor

//  -5 URIError URI错误
//  Tips: URI: UNIFORM RESOURCE INDENTIFIER 统一资源标识符
//  Tips: URL: UNIFORM RESOURCE LOCATOR 统一资源定位符
//  Tips: URN: UNIFORM RESOURCE NAME 统一资源名称
//  URL: http://www.baidu.com/news#today 有传输协议 代表资源的唯一可访问路径
//  URN: www.baidu.com/news#today 没有传输协议 代表资源的唯一名称
//  api: encodeURI(xxx) 转化为中文编码字符 decodeURI(xxx) 解码

//  --- 解码错误
//  decodeURI('%fdsdf%') URI malformed at decodeURI 不符合常规的URI解析错误 

//  -6 EvalError eval函数执行错误


// 2. 自定义错误
let syntaxError = new SyntaxError()
let typeError = new TypeError()
let referenceError = new ReferenceError()
// ...


// 3. try catch
try {
  console.log('正常执行');
  console.log(a);
} catch (error) {
  console.log(error);
  // !error.name ReferenceError
  // !error.message a is not defined
} finally {
  console.log('最终执行');
}

// json 串解析
try {
  let str = ''
  var json = JSON.parse(str)
} catch (error) {
  var errorTip = {
    name: '数据传输失败',
    errorCode: '10010'
  }
  console.log(errorTip);
}

// 4. throw 手动抛出 自定义错误
var str = ''
try {
  if(!str) {
    throw 'json字符串为空！';
  }
} catch (error) {
  console.log(error);
}