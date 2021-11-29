// 子表达式 (a) 为子表达式
// \1 为对a的引用 称为反向引用
let str = 'aaaaiddddgccccHaaaaA',
    RegExp = /(a)\1{3}/g
match(str, RegExp)

// 匹配 xxyy 这种结构
str = 'aaaddGsssbbaaoHHAAsdxxxx'
RegExp = /([A-z])\1([A-z])\2/g
match(str, RegExp)

str = 'xxyy阿斯顿ss撒大yy事实上ss'
RegExp = /yy(.+?)ss/g
RegExp.exec(str)
