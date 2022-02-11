module.exports = {
  a: 1
}

// 等价于

exports.a = 1


// this.a = 1 
// !记住，这样同样也可以做到上面的效果，因为模块中this === module.exports 但是非常不建议这样写
