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
      cache.shift();
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
      func(...args);
      flag = true;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), ms);
    }
  }
  return wrapper;
}

function debounceDecoratorNew2(func, ms) {
  let timeout, flag = false;
  function wrapper(count, ...args) {
    count += 1;
    if (flag === false) {
      func(...args);
      flag = true;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), ms);
    }
  }
  return wrapper;
}
