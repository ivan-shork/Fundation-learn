// 循环、引用值初识、显示及隐式类型转换

// 1 -> 循环

// step
// 1. 声明变量 i
// 2. if(i < 10) { console.log(i) } 不满足条件停止循环
// 3. i ++
for(var i = 0; i < 10; i++) {
  console.log(i);
} 

var i = 0;
for(; i < 10;) {
  console.log(1);
  i++;
}

// 相当于while循环 
while(i < 10) {
  console.log(i);
  i++;
}

// 2) break; 
var i = 0;
for(; i;) {
  console.log(i);
  i++;
  if(i > 10) {
    i = 0; // 相当于break; i = 0下次就停止循环了
    // break;
  }
}

// 从 0 开始做加法， 加到什么时候总和<100
var i = 0
var sum = 0 
for(; i<100;) {
  if(i + sum > 100) {
    break;
  }
  sum += i++
}
console.log(sum, i);

// 3) continue
for(var i = 0; i<=100; i++) {
  if((i % 7 === 0)|| i % 10 === 7) {
    continue;
  } else {
    console.log(i);
    
  }
}

// 打印0-99的数
// ()只能有一句 不能写比较
// { }里不能有 i++ 和 i--
var i = 100
for(; i--;) {
  console.log(i);
}
