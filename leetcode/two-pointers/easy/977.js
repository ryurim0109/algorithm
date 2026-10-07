const sortedSquares = function (nums) {
  let leftIdx = 0;

  while (leftIdx < nums.length) {
    const a = nums[leftIdx];

    nums[leftIdx] = a * a;
    leftIdx++;
  }
  return nums.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
