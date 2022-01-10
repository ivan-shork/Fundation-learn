// Array.prototype.copyWithin

// 1. copy 完是同个引用
var arr = [1, 2, 3, 4, 5]
var newArr = arr.copyWithin(0, 3, 5)
// [4, 5, 3, 4, 5]
// arr === newArr


// 2. 对象arr的 copy
var arr = [
  {
    name: 'aven',
    age: 12
  },
  {
    name: 'dd',
    age: 12
  },
  {
    name: 'ff',
    age: 12
  }
]
arr.copyWithin(0, 2)
// 拷贝完后， arr[0] 和 arr[2] 是同个引用了


// 3. 类数组对象的 copy
var obj = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  length: 5
}

const newObj = [].copyWithin.call(obj, 0, 2, 4)

var arr = [1, 2, 3, 5, 5]

// !4. 手写copyWidthin
Array.prototype.myCopyWithin = function(target, ...args) {
  // 用于call方法 异常
  if(this == null) {
    throw new TypeError('this is null or not defined')
  }
  // 如果这个this是一个原始值，用Obect给其包装一下变成引用值
  var obj = Object(this),
  // >>> 无符号位运算，保证其为正整数
      len = obj.length >>> 0,

      start = args[0],
      end = args[1],
      count = 0;
      
      // target 可能有多种情况，'abc', null, undefined,所以用位运算来兜底就可以
      target = target >> 0;
      // target 有可能为负数情况 +length即可
      target = target < 0 ?
               Math.max(target + len, 0) :
               Math.min(target, len);

      start = start ? start >> 0 : 0;
      start = start < 0 ?
              Math.max(start + len, 0):
              Math.min(start, len);

      end = end ? end >> 0 : len;
      end = end < 0 ?
            Math.max(end + len, 0):
            Math.min(end, len);

      // 计算要覆盖多少项
      count = Math.min(end - start, len - target)

      // 排除 start >= end ; target == len; 的情况
      if(count <= 0 || start === target) {
        return obj
      }

      // 收集要拷贝的项
      let copyObj = []
      for(let i = 0; i< count ;i ++) {
        copyObj[copyObj.length] = obj[start + i] 
      }
      let index = 0
      while(count-- > 0) {
        obj[target] = copyObj[index ++]
        target++;
      }

      return obj
}