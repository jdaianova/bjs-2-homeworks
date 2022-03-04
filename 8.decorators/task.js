function cachingDecoratorNew(func) {
let cache = [];
function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item)=> item.hash === hash);
    if (idx !== -1 ) {
        console.log("Из кэша: " + cache[idx].value);
        return "Из кэша: " + cache[idx].value;
    }
    let result = func(...args);
    cache.push({hash: hash, value: result });
    if (cache.length > 5) {
      cache.splice(0,1);
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
}
return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timeout, flag = false;
  function wrapper(...args) {
    if (flag === false) {
      timeout = setTimeout(() => {
        flag = false;
        func(...args);
      }, ms);
      flag = true;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), ms);
    }
  }
  return wrapper;
}

function debounceDecorator2(func,ms) {

}
