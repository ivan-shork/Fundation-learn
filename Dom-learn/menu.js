window.onload = () => {
  init()
}

function init() {
  var detailObj = initDetail()
  initMenu(detailObj)
}

var initDetail = (function(){
  var detailDiv = document.getElementsByClassName('detail')[0],
      RegExp  = /{{(.*?)}}/g,
      htmlTemplate = detailDiv.innerHTML
      
  return {
    detailReplace(data) {
      detailDiv.innerHTML = htmlTemplate.replace(RegExp, ($, $1)=> {
        return data[$1]
      })
    }  
  }
})


var initMenu = (function(detailObj){
  var container = document.getElementsByClassName('container')[0],
      tabs = document.getElementsByClassName('tabs')[0],
      barContainer = document.getElementsByClassName('bar-container')[0]
      tabItems = document.getElementsByClassName('tab-item'),
      contentContainer = document.getElementsByClassName('content-container')[0]
      tabLen = tabItems.length,
      t = null,
      isInSub = false,
      curIndex = 0,
      // 记录鼠标位置 
      mousePos = []

  addEvent(contentContainer, 'mouseenter', ()=> {
    isInSub = true
    
  })

  addEvent(contentContainer, 'mouseleave', ()=> {
    isInSub = false
  })

  addEvent(container, 'mouseenter', function() {
    addEvent(document, 'mousemove', mouseMove)
  })

  addEvent(container, 'mouseleave', tabMouseOut)

  let i = 0
  for(;i < tabLen;) {
    var tabItem = tabItems[i]
    addEvent(tabItem, 'mouseenter', mouseHandler)
    i++
  }
  function mouseHandler(e) {
    let eve = e || window.event,
        target = eve.target || eve.srcElement,
        thisIndex = Array.prototype.indexOf.call(tabItems, target),
        lastPos = mousePos[1] || {x:0 ,y:0},
        curPos = mousePos[2] || {x:0, y:0},
        // 判断是否需要延迟
        needDealy = doTimeOut(lastPos, curPos)
        console.log(needDealy);
        

        // 延迟
        if(t) {
          clearTimeout(t)
        }
        // 需要延迟
        if(needDealy) {
          console.log('需要延迟');
          t = setTimeout(()=> {
            if(isInSub) {
              return;
            }
            // 清除上一次的样式
            clearActive()
            // 记录找到的
            activeMenu(thisIndex)
            // 显示detail
            showDetail()
          }, 500)
          
          // 不需要延迟
        } else {
          console.log('不需要延迟');
          
          // 清除上一次的样式
          clearActive()
          // 记录找到的
          activeMenu(thisIndex)
          // 显示detail
          showDetail()
        }
        

  }
  function activeMenu(thisIndex) {
    curIndex = thisIndex
    tabItems[curIndex].className += ' active' 
    contentContainer.classList.remove('hide')   
  }
  function clearActive() {
    if(typeof curIndex !== 'undefined') {
      tabItems[curIndex].className = 'tab-item'
    }
  }
  function showDetail(){
    detailObj.detailReplace(detailDatas[curIndex])
  }

  function tabMouseOut() {
    
    if(!isInSub) {
      contentContainer.className += ' hide'
      clearActive()
    }
    delEvent(document, 'mousemove', mouseMove)
  }

  // 记录位置
  function mouseMove(e) {
    let eve = e || window.event
    let {x, y} = getMousePos(eve)
    
    mousePos.push({x, y})

    if(mousePos.length > 3) {
      mousePos.shift()
    }
    
  }

  function doTimeOut(lastPos, curPos) {
    console.log(lastPos, curPos);
    
    let Bpos = {
      x: barContainer.offsetLeft + barContainer.offsetWidth,
      y: barContainer.offsetTop
    }
    let Cpos = {
      x: barContainer.offsetLeft + barContainer.offsetWidth,
      y: barContainer.offsetTop + barContainer.offsetHeight
    }

    return pointInTriangle(curPos, lastPos ,Bpos, Cpos)
  }
});