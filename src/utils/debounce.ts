/**
 * @param {Function} func
 * @param delay
 * @return {*}
 */
export function debounce(func: (e: any) => void, delay = 100) {
  let timer: any = null;
  return function(e) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(e);
      timer = null;
    }, delay);
  };
}
