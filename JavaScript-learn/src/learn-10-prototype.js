// ! 1. 实例化后才有原型对象这个概念 __proto__属于每一个实例化对象，而不是属于某个构造函数 
function Car() {
  var _this = {
    __proto__: Car.prototype
  }
  return _this
}
Car.prototype.name = 'Benz'
var car = new Car()

// 事实上，当只有我们在实例化对象当时候，构造函数内部会生成一个对象（前面章节）
// 然后把Car的原型对象塞进这个对象的 __proto__ 属性里
// 如若我们把它赋值给其他原型对象 也一样

function Test() {}
function Car() {
  var _this = {
    __proto__: Test.prototype
  }
  return _this
}
var car = new Car()

// 此时返回的car的原型实际为Test的原型了，所以说实例化后，才有原型对象这个概念 


// ? 原型重新赋值

function Car() {}
let car = new Car()
Car.prototype = {
  name: 'benz'
}
car.name // undefiend

// 1. 此处将Car 的 prototype 重新赋值， 意味着Car.prototype <-> car.__proto__ 这个引用相等断了
// 2. 倘若是Car.prototype.name = 'Benz' 那么由于car.__proto__是和Car.prototype是一样的引用（在new的时候赋值了）,所以会同步
// 3. 因此实例化之后重新赋值原型 会使得car继续引用原来的原型对象 而不会引用新的
// 4. 再new一个实例，又会引用新的 