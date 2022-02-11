console.log(arguments[0] === this); // {}
console.log(arguments[0] === module.exports);
console.log(arguments[0] === exports);
console.log(module.exports === exports);

console.log(arguments[1] === require);
console.log(arguments[2] === module);

console.log(arguments[3] === __filename);
console.log(arguments[4] === __dirname);

const obj = require('./a.js')
console.log(obj);


(function(exports, require, module, __filename, __dirname) {
  // 实际上整个模块化就是这样一个过程，一个匿名函数模块，然后上面几个参数是形式参数
  // 所以日常我们在用require，exports 这些都是在用形参
})()



//! 实际上一个js文件（一个模块），可以看作是有个函数在执行它，我们用到的exports，module，require等，实际上是在调用这个函数的参数罢了