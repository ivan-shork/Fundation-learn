// 原始插件写法
(function(){
  var a = 1
  function add() {
    a++;
    console.log(a);
  }
  window.add = add
})();



// 插件
(function(){

  function Test() {}

  Test.prototype = {}

  window.Test = Test

})();


// 用立即执行函数可以隔离变量，防止全局变量污染，并且可以形成闭包