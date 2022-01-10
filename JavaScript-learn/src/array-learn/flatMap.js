// flatMap es2020 
// flat + map

const a = [1, -2, -3, 5, 8, -9, 6, 7, 0];
const aa = a.flatMap((item, index)=> {
  if(index>=1 && item < 0) {
    return [item, `${item} + ${a[index - 1]} = ${a[index - 1] + item}`]
  }
})


Array.prototype.myFlatMap = function(callbcak) {
  if(typeof callbcak !== 'function') {
    throw new TypeError(`${callbcak} is not a function!`)
  }
  var arr = this.slice()
  var res = []
  var arg2 = arguments[1] || null
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
    if(arr[i] !== void 0) {
      var subRes = callbcak.apply(arg2, [arr[i], i, arr])
      
      Array.isArray(subRes) ? (res.push(...subRes)) : (res.push(subRes))
    }
  }
  return res
  
}