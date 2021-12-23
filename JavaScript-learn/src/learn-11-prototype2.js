// 所有的被Object 实例化出来的对象都是有prototype的， 原型链的顶端是 Object.prototype
// 不要说成是Object


function Teacher() {
  this.success = {
    name: 'aven',
    age: 22
  }
  this.students = 100
}

let teacher = new Teacher()

function Student() {
  this.name = 'aven'
}

Student.prototype = teacher

let s1 = new Student()

s1.success.age = 10
s1.students = 100

// 这里的改动会造成Student的原型改了， 因为是引用关系
// 而修改原始值类型不会改变原型 只会在实例上添加属性


// ? Object.create()
// Object.create(对象 || null)
// 下面两种方式创建的对象 都是一样的结果
function Obj() {}
let obj1 = Object.create(Obj.prototype)
let obj2 = new Obj()

// ? Object.create() 用来继承
let parent = Object.create(null)
parent.age = 40
let child = Object.create(parent)


// ? call 
function Car(brand, color) {
  this.name = brand
  this.color = color
}
let newCar = {}
Car.call(newCar, 'Benz', 'red')

// 但是此种方法的对象继承不了原型， 所以一般用来继承实例

// call 借用实例对象和方法 无法继承（伪继承）
function Parent(opts) {
  this.name = opts.name
  this.age = opts.age
  this.instro = function() {
    console.log(this.name, this.age);
  }
}

function Child(opts) {
  Parent.call(this, opts)
  this.school = opts.school
  this.run = function() {
    console.log('run ...');
    
  }
}

child = new Child({
  name: 'aven',
  age: 22,
  school: 'HIti'
})

