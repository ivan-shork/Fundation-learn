// Array.prototype.from  es2015

// 1. 返回的是新的数组引用
// 2. 返回的是浅拷贝数组 （数组项是引用的情况）
// 3. 字符串、类数组可以转化
// 4. Symbol、number、boolean、regexp 不转
// 5. null undefined 报错
// 6. 可迭代对象或者类数组 可转化
// 7. 第二个参数可以传函数 可以遍历，且必须返回值改变数组



Array.myFrom = function(target, callback, newThis = null) {
  if(target === undefined || target === null) {
    throw new Error(`${target} is not iterable`)
  }
  if(callback !== void 0 && typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`)
  }
  if(typeof target !== 'object') {
    target = new Object(target)
  }
  var len = target.length || 0,
      res = [],
      isIterator = typeof target[Symbol.iterator] === 'function'
  
  // 可迭代对象的 如dom集合、set、map
  if(isIterator) {
    len = 0
    for(let value of target) {
      if(callback) {
        res[len] = callback.apply(newThis, [value, len])
      } else {
        res[len] = value
      }
      len++
    }
  } else {
  // 有length的类数组的
    for(let i = 0; i < len; i++) {
      if(callback) {
        res[i] = callback.apply(newThis, [target[i], i])
      } else {
        res[i] = target[i]
      }
    }
  }
  
  return res
}