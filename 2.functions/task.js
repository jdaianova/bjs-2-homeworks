// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = arr[0];
  max = arr[0];
  sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] < min) {
      min = arr[i]
    };
    if (arr[i] > max) {
      max = arr[i]
    };
  };
  avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum = sum + arr[i];
    }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = func(arrOfArr[0]);
  for (let i = 1; i < arrOfArr.length; i++) {
    if (max < func(arrOfArr[i])) {
      max = func(arrOfArr[i])
    };
  };
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0], max = arr[0], difference;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    };
    if (arr[i] > max) {
      max = arr[i]
    };
  };
  difference = Math.abs(max-min);
  return difference;
}
