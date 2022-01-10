// Array.prototype.find

// 注意此处对于稀松数组的处理，无需判断，因为find照样会遍历empty的数组项（for of的方法也可以遍历empty）
// 若是map 和 forEach等等es5的方法，则只会遍历有值的索引 
// 则要排除这种empty项，可以使用 in 来判断
Array.prototype.myFind = function(callback) {
  'use strict'
  if(this == null || this == undefined) {
    throw new TypeError(
      'Array.prototype.find called on null or undefined'
    )
  }
  if(typeof callback !== 'function') {
    throw new TypeError(
      `${callback} is not a function !`
    )    
  }

  let obj = new Object(this),
      len = obj.length >>> 0,
      findObj = undefined
  
  for(let i = 0; i < len; i++) {
    const isFind = callback(
      obj[i],
      i,
      obj
    )
    if(isFind) {
      findObj = obj[i]
      break;
    }
  }

  return findObj  
}