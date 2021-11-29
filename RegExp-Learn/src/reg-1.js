// 原子表字符不解析
// 此处的 .+没有正则表达式里的含义
let str = 'd.+ssaa.',
    RegExp = /[.+]/g
match(str, RegExp)