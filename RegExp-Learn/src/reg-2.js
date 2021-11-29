// + 1个或多个匹配
// {1, 正无穷}
let str = 'test the reg',
    RegExp = /\w+/g

match(str, RegExp)


// * 0个或多个匹配 但还是优先基于贪婪模式 即有则匹配
// {0, 正无穷}

// ['test', '', 'the', '', 'reg', '']
// 当匹配不到了， 则*会匹配到字符后面的 '' 譬如test的t后面 the的e后面 reg的g后面
str = 'test the reg',
RegExp = /\w*/g
match(str, RegExp)

// ['1', index: 0, input: '1a2b3c', groups: undefined]
// 没有g 且默认贪婪 因此只匹配一个1就好了
str = '1a2b3c'
RegExp = /\d*/
match(str, RegExp)

// ['1', '', '2', '', '3', '', '']
// 没有匹配上就会回头 所以每当走到abc的时候 匹配不到， 会回头匹配个空
RegExp = /\d*/g
match(str, RegExp)


// ? {0, 1}
str = '1a2b3c4d'
RegExp = /\d?/g
match(str, RegExp)

// {x,y}
str = 'abcdefg'
RegExp = /\w{1,2}/g
match(str, RegExp)

// {x,正无穷}
RegExp = /\w{1,}/g
match(str, RegExp)

// {0, 正无穷}
RegExp = /\w{0,}/g
// ['abcdefg', '']
match(str, RegExp)


