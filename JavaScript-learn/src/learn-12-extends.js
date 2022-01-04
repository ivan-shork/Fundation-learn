// 主题：继承深入

// ! 1.基本的继承形式

Professor.prototype = {
  name: 'aven',
  skill: 'web'
}
function Professor() {}

var professor = new Professor()

function Teacher() {}

Teacher.prototype = professor

function Teacher() {
  this.name = 'ako'
  this.mSkill = 'js'
}

var teacher = new Teacher()

Student.prototype = teacher

function Student() {
  this.name = 'kkk'
  this.kSkill = 'learn'
}

// ?此处teacher实例对象就继承了Professor的原型
// ?而student继承了老师和教授的原型

// ! 2.call/ apply 方式

function Teacher(name, mSkill) {
  this.name = name
  this.mSkill = mSkill
}

function Student(name, mSkill, pSkill) {
  Teacher.call(this, name, mSkill)
  this.pSkill = pSkill
}

var student = new Student()

// ? 此种方法相当于merge了实例的属性，但是只能继承实例属性

// ! 3.原型赋值
function Teacher() {}
function Student() {}

Student.prototype = Teacher.prototype

// ? 此种情况Student可以继承Teacher的原型， 但是会使得我往student原型下添加东西的时候，影响到teacher的原型

// ! 4.借用中间构造函数

function Teacher() {}

function Buffer() {}
Buffer.prototype = Teacher.prototype
var buffer = new Buffer()

function Student() {}
Student.prototype = buffer
Student.prototype.age = 12 // 此处添加不会影响到teacher的原型


// ? 此种做法通过中间的空构造函数来继承原型对象，
// ? 且实例对象后可隔离继承的父级，不会影响父级原型对象
// ? 与第一种比较 ，好处是只继承原型对象，不会继承到实例属性（因为构造函数里面是空的）
// ? 与第三种比较， 好处是不会影响到所继承的原型对象（隔离）


// ! 继承的封装
function inherit(Target, Parent) {
  function Buffer() {}
  Buffer.prototype = Parent.prototype
  Target.prototype = new Buffer()
  // 修改原型的构造器为本身
  Target.prototype.constructor = Target
  // 添加继承的构造函数
  Target.prototype.super_class = Parent
}

// 既然 Buffer 可以一直用 利用闭包来循环利用好了 
var inherit = (function() {
  var Buffer = function() {} // 不会泄漏到外面
  return function(Target, Parent) {
    Buffer.prototype = Parent.prototype
    Target.prototype = new Buffer()
    // 修改原型的构造器为本身
    Target.prototype.constructor = Target
    // 添加继承的构造函数
    Target.prototype.super_class = Parent
  }
})();



// 插件写法
var initProgrammer = (function() {
  function Programmer() {}
  Programmer.prototype = {
    name: '程序员',
    tool: '计算机',
    say() {
      console.log('我是一名程序员～');
    }
  }

  function FrontEnd() {}
  function BackEnd() {}

  inherit(FrontEnd, Programmer)
  inherit(BackEnd, Programmer)

  FrontEnd.prototype.lang = ['js', 'html', 'node']
  BackEnd.prototype.lang = ['sql', 'java', 'node']

  return {
    FrontEnd,
    BackEnd
  }
})();


// 模块化
;(function(){
  function Slider(opts) {

  }
  Slider.prototype = {

  }
  window.Slider = Slider
})();


var utils = (function() {

  // ...

  var inherite = (function(){
    var Buffer = function() {}
    return function(Target, Origin) {

    }
  })();
  
  // ...

  return {
    inherite,
    // ...
  }
})();