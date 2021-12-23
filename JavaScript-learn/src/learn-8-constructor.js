
//? 1. AO中的this
// 当Car函数被调用后， Car的AO形成， 此时this有了 指向window 
// 没实例化 -> this指向window, 实例化 -> this指向对象
function Car(color) {
  this.color = color
}

// 虽然是调用同一个构造函数，但this在实例化后，指向不同的实例对象
var car1 = new Car('red')
var car1 = new Car('green')

//? 2. 实例化的过程
// Car new执行的时候，函数AO里面实际上帮我们生成了一个this对象
// 最后隐式帮我们返回了这个this对象
function Car(color) {
// this = { ... }
   this.color = color
// return this  
}

//! 实际上下面的过程也和实例化是一样的，只是我们用new关键字帮我们实现了一些操作
function Car(color) {
  var _obj = {}
  _obj.color = color
  return _obj
}

var car = Car('red')

//? 3. 手动return
function Car(color) {
  this.color = color
  return 1
}

var car = new Car('red')
car.red // 'red'

function Car(color) {
  this.color = color
  return {}
}

car = new Car('red')
car.red // undefiend

// !由以上可以得出 返回的是原始值的话，没有效果， 返回的是引用类型的话，可以改变