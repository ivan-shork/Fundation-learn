// 迭代器 生成器 

// 1. Array 的7种遍历
// for forEach map filter reduce reduceRight(reduce的反向操作) every some


// ? 2. 迭代？
// 我们希望遍历的过程是可控的，遍历可以由自己来停止和继续，手动控制
// 产品迭代 -> 人为控制产品的升级与拓展
// 遍历实际上就是迭代的一次又一次执行，遍历的底层实际上就是迭代

// 3. 生成器 迭代器 区别
// 生成器是一个函数，迭代器是一个由生成器函数执行后返回的带有next方法的对象
// 生成器对迭代的控制是由 yield 关键字来控制的

function * generator() {
  yield '姓名：aven';
  yield '年龄：23';
  yield '爱好 冥想';
  return '我爱JavaScript'; // return 的时候 生成器产生的对象done
}

const iterator = generator()
var res = iterator.next()
while(res && res.value) {
  console.log(res.value);
  res = iterator.next() 
}

var arr = ['姓名：aven', '年龄：23', '爱好 冥想']
function * gen() {
  for(let val of arr) {
    yield val
  }
  return '我爱js'
}

const ite = gen()
var res = ite.next()
while(res && res.value) {
  console.log(res.value);
  res = ite.next() 
  console.log(res);
  
}


// ! 4. 手写生成器
function myGenerator(arr) {
  var nextIndex = -1
  return {
    next: function() {
      var _this = this
      nextIndex ++;
      return arr[nextIndex] ? {
        value: arr[nextIndex],
        done: nextIndex >= arr.length - 1,
        // 此处往对象里塞了next， 支持链式写法
        next: _this.next
      } : undefined
    }
  }
}

var arr = [1, 2, 3, 5]
var myIte = myGenerator(arr)
myIte.next().next().next()
