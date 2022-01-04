// 事件绑定处理函数 实际上就是一种发布订阅的模式

class EventEmitter {
  constructor() {
    this.handlers = {}
  }
  // 订阅
  on(type, handler, once) {
    if(!this.handlers[type]) {
      this.handlers[type] = []
    }
    if(typeof handler === 'function' && !this.handlers[type].includes(handler)) {
      this.handlers[type].push(handler)
      handler.once = once
    }
  }
  once(type, handler) {
    this.on(type, handler, true)
  }

  // 解除订阅
  off(type, handler) {
    if(this.handlers[type] && this.handlers[type].includes(handler)) {
      this.handlers[type] = this.handlers[type].filter(h=> {
        return h !== handler
      })
    }
  }

  // 发布
  trigger(type) {
    if(!this.handlers[type]) {
      throw new Error('无此订阅器')
    }
    this.handlers[type].forEach(handler=> {
      handler.call(this)
      if(handler.once) {
        this.off(type, handler)
      }
    })
  }
}


let eve = new EventEmitter()
let handler1 = ()=> {
  console.log('111');
}
let handler2 = ()=> {
  console.log('222');
}
let handler3 = ()=> {
  console.log('333');
}
eve.on('test', handler1, true)
eve.on('test', handler2)
eve.on('test', handler3)

eve.trigger('test')
eve.trigger('test')

eve.off('test', handler2)
eve.trigger('test')


try {
  
  eve.trigger('asds')
} catch (error) {
  console.log(error);
  
}

console.log(eve);
