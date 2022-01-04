// __proto__ 的详解

//  JS当中一个对象引用一定有__proto__属性 [[prototype]] 
//  浏览器看到的[[Prototype]]是一个插槽，我们也可以叫做特性，//!它代表了一种继承关系，在浏览器端只是显示给我们看而已
//  实际上，在实例化的过程中， 往this塞__proto__这个属性时，会指向Constructor.prototype这个引用
function test() {
  /*
    var this = {
      __proto__: test.prototype,
      ...
    }
    return this 
    */
}
new test()


//  所以 Object.prototype 也不例外，也有原型，它的原型为null. 但是不能没完没了 所以是最顶端
    Object.prototype.__proto__ = {
      a: 1
    }
    Object.prototype.__proto__ = 1 // 不报错 没意义
    // 会报错
    // !不能再给其赋引用值了，引用值是有继承关系的， 否则按照理论来说，那么它又会无限往上走 这样就没完没了了
    // 而设置原始值 是因为原始值是没继承关系的 没意义 还有赋值了原始值之后，其实还是null


    // 访问 __proto__ 实际上走了 Object.prototype底层的 get __proto__ 
    // 设置 __proto__ 实际上走了 Object.prototype底层的 set __proto__ 
    // !此get set 方法只有底层Object的原型上才有
    function MyObject() {}
    Object.defineProperty(MyObject.prototype, '__proto__', {
      get() {
        return null
      },
      set(val) {
        if(typeof val === 'object' || typeof val === 'function') {
          throw new Error('已经是原型链顶端，不能再赋值了哦')
        }        
      }
    })
    Object.defineProperty(obj, 'name', {
      get() {
        
        console.log('get name');
        return obj['_name']
      },
      set(value) {
        obj['_name'] = value
        console.log('set name');
        
      }
    })


// !引用丢失问题
  
    // 正常的继承 
    function Fn() {}
    let fn = new Fn()
    // fn.__proto__ === Fn.prototype 引用相同 没问题
    fn.__proto__ === Fn.prototype

    // 此处由于Object.create(null) 导致Test.prototype的引用指向不到原型对象，因而实例化的对象也继承了这个特性
    // 在new的时候同样找不到内存中的这个原型对象，因为引用丢失了
    let newPrototype = Object.create(null)
    function Test() {}
    Test.prototype = newPrototype
    Test.prototype.a = 1
    let test = new Test()
    test.__proto__ === Test.prototype // false