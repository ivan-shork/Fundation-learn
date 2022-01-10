// Array.prototype.flat

var arr = [1, [2, 3], [1, 2, [33]], 3]
// 可以传flat的层级 甚至可以传Infintity来全部展开
var newArr = arr.flat(1)
var newArr = arr.flat(Infinity)


// 不使用concat
Array.prototype.myFlat = function() {
  var arr = this
  const newArr = []
  arr.forEach(item=> {
    if(item instanceof Array) {
      item.forEach(subItem=> {
        newArr.push(subItem)
      })
    } else {
      newArr.push(item)    
    }
  })

  return newArr
}


// 使用concat
function shallowConcat(arr) {
  return arr.reduce((pre, cur)=> {
    return pre.concat(cur)
  }, []);
}


// 使用拓展运算符
function shallowConcat(arr) {
  return [].concat(...arr)
}


// !深度扁平化
Array.prototype.deepFlat = function(level = 1) {
  var arr = this,
      level = level === Infinity ? Infinity : ((isNaN(Number(level) || Number(level) < 0) ? 0 : Number(level)))
  if(level > 0) {
    return arr.reduce((pre, cur)=> {
      return pre.concat(Array.isArray(cur) ? cur.deepFlat(level - 1) : cur)
    }, [])
  } else {
    return arr
  }
}

// 全部递归
Array.prototype.flatAll = function() {
  var arr = this
  const newArr = []
  arr.forEach(item=> {
    if(item instanceof Array) {
      const arr = item.flatAll()
      newArr.push(...arr)
    } else {
      newArr.push(item)    
    }
  })
  return newArr
}

// 全部递归 内部递归
Array.prototype.flatAll = function() {
  var arr = this,
      res = [];
  
  (function _(arr) {
    arr.forEach(item=> {
      if(Array.isArray(item)) {
        _(item)
      } else {
        res.push(item)
      }
    })
  })(arr);

  return res
}

// 全部递归 - 栈
Array.prototype.flatAll = function () {
  // 拷贝一份
  var arr = [...this]
  var res = []
  while (arr.length) {
    let popItem = arr.pop()
    if(Array.isArray(popItem)) {
      arr.push(...item)
    } else {
      res.push(popItem)
    }
  }
  return res.reverse()
}
