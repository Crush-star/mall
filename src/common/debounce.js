export function debounce(func,delay) {
  let time = null
  return function() {
    if(time) clearTimeout(time)
    time = setTimeout(() => {
      func()
    }, delay);
  }
}

