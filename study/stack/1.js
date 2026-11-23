const isValid = (string) => {
  const stack = [];
  const close = { ")": "(", "}": "{", "]": "[" };
  for (let i = 0; i < string.length; i++) {
    if (close[string[i]]) {
      const last = stack[stack.length - 1];
      if (last === close[string[i]]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(string[i]);
    }
  }

  return stack.length === 0;
};

console.log(isValid("[{}])"));

// isValid("()[]{}"); // true
// isValid("([{}])"); // true
// isValid("(]"); // false
// isValid("([)]"); // false
// isValid("((("); // false
