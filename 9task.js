const arr = [1, 2, 3, 4, 5];

// mySlice(arr, [start], [end])

function mySlice(arr, start = 0, end = arr.length) {
  if (start < 0) start = Math.max(arr.length + start, 0);
  if (end < 0) end = Math.max(arr.length + end, 0);

  const result = [];

  for (let i = start; i < end && i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result;
}

// myIndexOf(arr, item, from)

function myIndexOf(arr, item, from = 0) {
  if (from >= arr.length) return -1;

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}

// myIncludes(arr, item, from)

function myIncludes(arr, item, from = 0) {
  if (from >= arr.length) return false;

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) return true;
  }

  return false;
}

console.log(mySlice(arr, 1, 2)); // [2]
console.log(myIndexOf(arr, 1, 2)); // -1
console.log(myIncludes(arr, 1)); // true
