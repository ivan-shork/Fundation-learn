// Array.prototype.fill

// Array.prototype.fill('value', start, end)
// 此处替换为 [start, end) 开头为开区间，结尾为闭区间


// 1. start 不传默认为0， end不传默认为length
// 2. start, end 传字符串，NaN, null, 都默认为 0（用带符号位运算）, start 传undefined默认为0
// 3. end 传undefined同不传时的undefined一样，默认为length， 所以fill('c', undefined, undefined) 覆盖全部


// 重写
Array.prototype.myFill = function(value) {
  'use strict'

  // fill此处是一个通用方法，所以要判断call的时候的调用
  if(this == null || this == undefined) {
    throw new TypeError('Cannot convert undefined or null to object!')
  }

  // 转化为对象
  // 此种情况一般用来处理类数组，所以采用写成这种方式，当然，如果传进数字和字符串都可以，只不过一个报错，另一个返回引用对象
  let obj = new Object(this)
  let args = arguments
  // value 值怎么传后者不传都行 所以不做特殊处理
  let len = obj.length
  let start = args[0] >> 0
  let end = typeof args[1] !== 'undefined' 
            ? args[1] >> 0
            : len

  start = start < 0 ? 
          Math.max(0, start + len) :
          Math.min(start, len)
  
  end = end < 0 ?
        Math.max(0, end + len) :
        Math.min(end, len)          

  let count = end - start
  console.log(count);
  
  for(let i = start; i < start + count; i++) {
    console.log(i);
    obj[i] = value
  }

  return obj
}