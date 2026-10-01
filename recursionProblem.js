// Problem: Given a non-negative integer n, return n! (n factorial).
// Factorial is defined as n * (n - 1) * ... * 1, with 0! = 1.
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError("n must be a non-negative integer");
  }

  // Base case: stop when the problem has been reduced to 0!.
  if (n === 0) {
    return 1;
  }

  // Recursive case: n! = n * (n - 1)!.
  return n * factorial(n - 1);
}

console.log("factorial(0):", factorial(0));
console.log("factorial(1):", factorial(1));
console.log("factorial(5):", factorial(5));