const path = require('path')
const fs = require('fs');
const { log } = require('console');

function Module(filename) {
  this.id = filename;
  this.exports = {};
}


Module.extensions = {
  '.js'(module) {
    let script = fs.readFileSync(module.id, 'utf-8')
    // let fn = eval(Module.wrapper[0] + script + Module.wrapper[1])
    let fn = new Function('exports', 'require', 'module', '__filename', '__dirname', script)
    fn.call(module.exports, module.exports, myRequire, module, module.id, path.dirname(module.id))
  },
  '.json'(module) {
    let json = fs.readFileSync(module.id, 'utf-8')
    module.exports = JSON.parse(json)
  }
}

Module.resolveFilename = function(filename) {
  const absPath = path.resolve(__dirname, filename);
  let current = absPath
  // 判断文件是否存在，如果不存在，考虑先加后缀
  const flag = fs.existsSync(absPath);
  if(!flag) {
    // 加后缀
    current = Object.keys(Module.extensions)
    .map(extension => {
      return current + extension
    })
    .filter(current => fs.existsSync(current))
    .join()

    if(!current) {
      throw new Error('文件不存在')
    }
  }
  return current
}

Module.prototype.load = function() {
  // 获取文件路径的拓展名
  const ext = path.extname(this.id)
  Module.extensions[ext](this)
}

Module.wrapper = [
  ";(function(exports, require, module, __filename, __dirnme){","})()"
]

Module._cache = {

}

// 1. 把相对路径转化成绝对路径 
// __dirname 当前执行文件的目录 （不变的）
// process.cwd() current working director 当前工作目录 ， 意思是说如果我们在其他地方执行文件的话，执行目录就是在那里
// path.resolve 将多个路径片段拼接成一个绝对路径
function myRequire(filename) {
  const current = Module.resolveFilename(filename);
  if(Module._cache[current]) {
    return Module._cache[current].exports
  }
  let module = new Module(current);
  module.load();
  Module._cache[current] = module
  return module.exports
}

console.log(myRequire('./a'))