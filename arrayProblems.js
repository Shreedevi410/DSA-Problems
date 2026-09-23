function twoSum(arr, target) {
  const seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(arr[i], i);
  }

  return [];
}

function maxSubarraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let currentSum = arr[0];
  let maximumSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maximumSum = Math.max(maximumSum, currentSum);
  }

  return maximumSum;
}

function rotateArray(arr, steps) {
  if (arr.length === 0) {
    return arr;
  }

  const rotations = ((steps % arr.length) + arr.length) % arr.length;
  const rotatedPart = arr.splice(arr.length - rotations, rotations);
  arr.unshift(...rotatedPart);

  return arr;
}

const numbers = [2, 7, 11, 15];
console.log("Two Sum indexes:", twoSum(numbers, 9));

const values = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Maximum subarray sum:", maxSubarraySum(values));

const rotatedNumbers = [1, 2, 3, 4, 5];
console.log("Rotated array:", rotateArray(rotatedNumbers, 2));