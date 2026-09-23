// Linear search works on sorted or unsorted arrays.
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// Binary search requires the array to be sorted in ascending order.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    }

    if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

// Jump search requires the array to be sorted in ascending order.
function jumpSearch(arr, target) {
  const jumpSize = Math.floor(Math.sqrt(arr.length));
  let blockStart = 0;
  let blockEnd = jumpSize;

  while (blockStart < arr.length && arr[Math.min(blockEnd, arr.length) - 1] < target) {
    blockStart = blockEnd;
    blockEnd += jumpSize;
  }

  for (let i = blockStart; i < Math.min(blockEnd, arr.length); i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// Interpolation search requires a sorted array of uniformly distributed numbers.
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (arr[low] === arr[high]) {
      return arr[low] === target ? low : -1;
    }

    const position = low + Math.floor(
      ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]),
    );

    if (arr[position] === target) {
      return position;
    }

    if (arr[position] < target) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }

  return -1;
}

const numbers = [10, 20, 30, 40, 50, 60, 70, 80];
const target = 50;

console.log("Array:", numbers);
console.log("Linear search index:", linearSearch(numbers, target));
console.log("Binary search index:", binarySearch(numbers, target));
console.log("Jump search index:", jumpSearch(numbers, target));
console.log("Interpolation search index:", interpolationSearch(numbers, target));