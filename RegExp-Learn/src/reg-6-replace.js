

// xxyy -> yyxx
let str = 'aabb sdas ddff',
    RegExp = /(\w)\1(\w)\2/g
    
// let str1 = str.replace(RegExp, '$2$2$1$1')
// console.log(str1);
// let str1 = str.replace(RegExp, function(match, son1, son2){
//   return `${son2}${son2}${son1}${son1}`
// })
// console.log(str1);


// // xxyyzz -> XxYyZz
// str = 'xxyyzz'
// RegExp = /(\w)\1/g

// str1 = str.replace(RegExp, ($, $1)=> {
//   return $1.toUpperCase() + $1
// })

// 反向引用去重
str = 'aaaaabbccccdddg'
RegExp = /(\w)\1*/g
match(str, RegExp)
str1 = str.replace(RegExp, ($, $1)=> {
  return $1 
})
// str1 = [...new Set([...str])].join('')
console.log(str1);


// 千分位 记住 \B非单词边界时我才加,
str = '100000000000'
RegExp = /(?=(\B)(\d{3})+$)/g
console.log(str.replace(RegExp, ','));

