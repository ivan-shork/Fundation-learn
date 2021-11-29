// 正向预查
let str = '1coming soon fetching merge camping ing',
    RegExp  = /\w+(?=ing)/g

match(str, RegExp)

// .+ .+? 加个问好变成了惰性模式 否则基础都是贪婪模式 会匹配{{哈斯多}},age:{{12}}
str = 'name:{{哈斯多}},age:{{12}}'
RegExp = /(\w+):{{(.+?)}}/g
let obj = {}
while(res = RegExp.exec(str)) {
  const [_, _key, _val] = res
  obj[_key] = _val
}
console.log(obj);

// ? 0次或1次 优先贪婪匹配 再加个问好“??”则会变成惰性匹配 即匹配零次 
str = 'bbbbb'
RegExp = /\w?/g
match(str,RegExp)
// ['b', 'b', 'b', 'b', 'b', ''] 最后一次还有零次匹配 所以会匹配空字符串出来
RegExp = /\w??/g
match(str, RegExp)
// ['', '', '', '', '', '']

// !写一个至少六位 包含一个大写 一个小写 一个数字 一个特殊字符
str = 'Asasd123!'
RegExp = /^.*(?=.{6,})(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!~&^%$@#]).*$/
match(str, RegExp)