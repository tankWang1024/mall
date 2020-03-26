//方法

// 防抖动
export function debounce(func, delay) {
  // 防抖动函数,下次执行前等待时间大于等于delay时func才被执行
  // 持久化timer变量,只执行一次,然后拿返回的函数来执行
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}

// 节流
export function throttle(fn,gapTime){
  let _lastTime = 0;
  return function(...args){
    let _nowTime = +new Date() // 快速转为时间戳
    if(_nowTime - _lastTime > gapTime){
      fn.apply(this,args)
      _lastTime = _nowTime
    }
  }
}