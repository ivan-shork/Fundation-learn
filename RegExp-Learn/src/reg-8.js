// 零宽断言 ?<= 
// 即匹配出前面有 xxx 的东西 
let str = '大家好,我是渣渣辉',
    str1 = '大家好,我是aven',
    RegExp = /(?<=大家好,?)我是(.+)$/
match(str, RegExp)


// 断言中也可以使用匹配组
let span = `
  <a href='https://www.baidu.com'>百度</a>
  <a href='http://www.123.com'>123</a>
`
RegExp = /(?<=href=(['"]))https?:\/\/(.+)\1/ig

// ?! 零宽负性断言
// 此处$符号是针对前面的[A-z]的 不是针对断言的
str = 'hello123,iam_aven'
RegExp = /[A-z]+(?!\d+)$/g
match(str, RegExp)

// 零宽负向后性断言
// 即预测前面不是xxx的东西
str = 'href=http://www.baidu.com,http://www.hao123.com,href=http://netfet.cn'
RegExp = /(?<!href=)https?:\/\/(\w+\.?)+/g
match(str, RegExp)