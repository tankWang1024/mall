//方法
export function debounce(func, delay) {
  // 防抖动函数,下次执行前等待时间大于等于delay时func才被执行
  // 持久化timer变量,只执行一次,然后拿返回的函数来执行
  let timer = null;
  return function (...args) {
    /**
     * 事件循环机制
     * 同步在主线程执行完后,再把异步推入主线程执行,
     * 所以频繁事件下次执行时,若未超过设置的delay,则timer还在,就会被清除,然后设置新的,相当于重置时间
     */
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}