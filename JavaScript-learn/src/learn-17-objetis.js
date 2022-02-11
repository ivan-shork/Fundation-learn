// 相等性判断

// == 非严格相等 abstrict equality
// === 严格相等  strict equality 不进行隐式转换 


// 任何对象都与 undefined null 不相等
// 宅对象是一种特殊情况
// document.all -> undefined ( == )
// typeof document.all 为 undefined


// falsy 值
// false 0, +/- 0, 8n, "", '', ``, null, undefined, NaN


// !同值相等 (底层实现是用Object.is)
// NaN === NaN
// +0 !== -0

let obj = {}
Object.defineProperty(obj, 'myNaN', {
  value: NaN,
  configurable: false,
  writable: false,
  enumerable: false
})
// 重新定义一遍不会报错

Object.defineProperty(obj, 'myZero', {
  value: +0,
  configurable: false,
  writable: false,
  enumerable: false
})
// 重新定义一遍 -0 会报错



// !零值相等
// +0 === -0


// !Object.is 同值相等的实现

Object.myIs = function(a, b) {
  if(a === b) {
    return a !== 0 || (1 / a === 1 / b)
  }
  return a !== a && b !== b
}