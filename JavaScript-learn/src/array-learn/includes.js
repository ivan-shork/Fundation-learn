Array.prototype.myIncludes = function(val, pos) {

  if(!this) {
    throw new TypeError('Cannot convert undefined or null to object at includes ')
  }

  var obj = new Object(this),
      len = obj.length >>> 0;
  pos = pos >> 0;
  pos = pos > 0 ? Math.min(pos, len) : Math.max(0, pos + len)

  for(let i = pos; i < len; i++) {
    if(obj[i] === val) {
      return true
    }
  }
  return false
}