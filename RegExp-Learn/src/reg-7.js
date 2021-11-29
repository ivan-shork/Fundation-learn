// ?: 不记录匹配分组
// 这样就可以在嵌套分组的时候 排除不必要的匹配分组 拿到我们只想要的匹配分组 
let str = 'http://www.baidu.com',
    str1 = 'https://netfee.cn',
    str2 = 'http://renrenwang.shipin.com',
    RegExp = /^https?:\/\/((?:\w+\.?)+(?:com|cn|org))/g
