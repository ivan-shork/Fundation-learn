// ^n 开头匹配
// 匹配以ab开头的 并且中间不要有空格的字符 (包含纯ab)
let str = 'ab—23 123',
    RegExp = /^ab[^\s]*/g

match(str, RegExp)


// n$匹配结尾
// 匹配以_结尾的并且前面只能是字符串的字符
str = '123as_23a2ab_'
RegExp = /[A-z]+_$/
match(str, RegExp)


// (?=n) 紧跟着n的字符
// 匹配紧跟着aven的前面的字符串和_
str = '23sd_aven_ace$'
RegExp = /[A-z|_]+(?=aven)/
match(str, RegExp)


// (?!n) 后面不是n的字符
str = 'cacddctcd'
RegExp = /\w{1,2}(?!d)/g
match(str, RegExp)