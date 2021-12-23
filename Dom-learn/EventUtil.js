function addEvent(el, type, fn) {
  if(el.addEventListener) {
    el.addEventListener(type, fn, false)
  } else if(el.attachEvent){
    el.attachEvent('on' + type, function() {
      fn.call(el)
    })
  } else {
    el['on' + type] = fn
  }
}

function delEvent(el, type, fn) {
  if(el.addEventListener) {
    el.removeEventListener(type, fn, false)
  } else if(el.attachEvent){
    el.detachEvent('on' + type, fn)
  } else {
    el['on' + type] = null
  }
}

function cancelBubble(e) {
  let eve = e || window.event
  if(eve.stopPropagation) {
    eve.stopPropagation()
  } else {
    e.cancelBubble = true
  }
}

function preventDefaultEvent(e) {
  let eve = e || window.event
  if(eve.preventDefault) {
    // w3c
    eve.preventDefault()
  } else {
    // ie
    eve.returnValue = false
  }
}

 // 获取鼠标距离
 const getMousePos = (e)=> {
  let scrollX = getScrollOffset().left,
  scrollY = getScrollOffset().top,
  // 边距
  clientLeft = document.documentElement.clientLeft || 0,
  clientTop = document.documentElement.clientTop || 0,
  clientX = e.clientX,
  clientY = e.clientY
  
  return {
    x: scrollX + clientX - clientLeft,
    y: scrollY + clientY - clientTop 
  }
}

// 获取 offsetX/Y
function getParentOffset(e) {
  let event = e || window.e;
  if (event.offsetX || event.offsetY) {  //适用非Mozilla浏览器
      x = event.offsetX;
      y = event.offsetY;
  } else if (event.layerX || event.layerY) {  //兼容Mozilla浏览器
      x = event.layerX;
      y = event.layerY;
  }
}


// 获取滚动条距离
const getScrollOffset = ()=> {
  if(window.pageXOffset) {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    }
  } else {
    return {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop,
    }
  }
}

// 获取可视区域距离
function getViewPortSize() {	
  if(window.innerWidth) {	
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
   } else {
    if(document.compatMode === 'BackCompat') {
  //怪异模式
  return {
  width: document.body.clientWidth,
  height: document.body.clientHeight
  }
} else {
// 标准模式 
  return {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight
  }
}
}
}
// 获取整个文档的宽高
function getDocSize() {
if(document.body.scrollWidth) {
  return {
    width: document.body.scrollWidth,
    height: document.body.scrollHeight
  }
} else {
  return {
    width: document.documentElement.scrollWidth,
    height: document.documentElement.scrollHeight
  }
}
}

// 获取offsetTop / Left
function getOffset(el) {
  let x = el.offsetLeft,
      y = el.offsetTop,
      parent = el
  while(parent = parent.offsetParent) {
      x += parent.offsetLeft
      y += parent.offsetTop
  }
  return {
    offsetLeft: x,
    offsetTop: y
  }
}


function vec(a, b) {
  return {
    x: b.x - a.x,
    y: b.y - a.y
  }
}

function vecProduct(v1, v2) {
  return v1.x * v2.y - v2.x * v1.y
}

function sameSymbols(a, b) {
  return (a ^ b) >= 0
}


function pointInTriangle(p, a, b, c) {
  var PA = vec(p, a),
      PB = vec(p, b),
      PC = vec(p, c),
      R1 = vecProduct(PA, PB)
      R2 = vecProduct(PB, PC)
      R3 = vecProduct(PC, PA)
      console.log(R1, R2, R3, 'RRRR');
      

  return sameSymbols(R1, R2) && sameSymbols(R2, R3)
}