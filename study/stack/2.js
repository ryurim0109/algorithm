const dailyTemperatures = (temp) => {
  const stack = [];
  const result = Array(temp.length).fill(0);
  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];

    while (!!stack.length && temp[stack[stack.length - 1]] < curTemp) {
      const lastIdx = stack.pop();
      result[lastIdx] = i - lastIdx;
    }

    stack.push(i);
  }
  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
