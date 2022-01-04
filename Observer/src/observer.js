
// 对象
class Target {
  constructor(data) {
    this.data = data
    this.observer = new Observer(".list")
    this.init()
  }

  init() {
    // 校验数据
    this.validData()
    // 代理数据
    this.proxyData()
  }

  validData() {
    const {username, age, password, sex} = this.data
    username.length < 4 && (this.data.username = '')
    typeof age !== 'number' && (this.data.age = 0)
    password.length < 8 && (this.data.password = '')
    !['male', 'female'].includes(sex) && (this.data.sex = 'male')
  }

  // !这一步就是在目标对象变动的时候 观察者观察到 并会执行一系列操作
  proxyData() {
    const _this =  this
    for(let key in this.data) {
      if(this.data.hasOwnProperty(key)) {
        Object.defineProperty(this, key, {
          get() {
            // 打印 get 日志
            _this.observer.updateLog('get', key, _this.data[key])
            return _this.data[key]
          },
          set(newVal) {
            // 打印 set 日志
            _this.observer.updateLog('set', key, _this.data[key], newVal)
            _this.data[key] = newVal
          }
        })
      }
    }
  }

}


// 观察者 观察get set 并且触发一些操作
class Observer {
  constructor(el) {
    this.el = document.querySelector(el)
    this.logPool = []
  }
  updateLog(type, key, oldVal, newVal) {
    switch (type) {
      case 'get':
        this.getProp(key, oldVal)
        break;
      case 'set':
        this.setProp(key, oldVal, newVal)
        break;
      default:
        break;
    }
  }
  getProp(key, oldVal) {
   const o = {
     type: 'get',
     key,
     value: oldVal,
     time: new Date().toLocaleString()
   } 
   this.logPool.push(o)
   this.logShow(o)
  }
  setProp(key, oldVal, newVal) {
    const o = {
      type: 'set',
      key,
      oldValue: oldVal,
      newValue: newVal,
      time: new Date().toLocaleString()
    } 
    this.logPool.push(o)
    this.logShow(o)
   }
   logShow(o) {
    const logEle = document.createElement('li')
    let logText = ''
    switch(o.type) {
      case 'get':
        logText = `
          访问了${o.key}属性，其值为${o.value}，时间：${o.time}
        `
        break;
      case 'set':
        logText = `
          设置了${o.key}属性，原始值为${o.oldValue}，新设置的值为${o.newValue}，时间：${o.time}
        `
        break;
      default:
        break;
    }
    logEle.innerText = logText
    this.el.appendChild(logEle)
   }
}
