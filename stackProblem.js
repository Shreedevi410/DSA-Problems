// Problem: Valid Parentheses
// Given a string containing only the following characters: (), {}, []
// determine whether every opening bracket has a matching closing bracket
// in the correct order.

function isValidParentheses(str) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const ch of str) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
      continue;
    }

    if (stack.length === 0 || stack.pop() !== pairs[ch]) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log("(()):", isValidParentheses("(()))"));
console.log("()[]{}:", isValidParentheses("()[]{}"));
console.log("([{}]):", isValidParentheses("([{}])"));
console.log("(]:", isValidParentheses("(]"));
console.log("abc:", isValidParentheses("abc"));
