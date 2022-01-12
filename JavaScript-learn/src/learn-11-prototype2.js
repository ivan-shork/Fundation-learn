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



var obj = Object.create(null)
obj.a = 1
var childObj = Object.create(obj)
childObj.__proto__ // undefined

// 之所以是undefined是因为obj的原型是空，所以objchild继承实际上原型链断掉了
// __proto__ 这个原型链的指针没有了，因为原型链被损坏了
// 但是继承还是可以继承，内部还是通过[[prototype]]属性往上找查找继承属性
// !所谓的原型链 就是一个个指针 __proto__ 串起来的，他就是一个指针，指向prototype这个继承属性（这个指针的赋值是在new的时候完成的，往this里塞的）
// !但是实际上属性的攀升查找仍然是通过内部[[prototype]]这个插槽来的