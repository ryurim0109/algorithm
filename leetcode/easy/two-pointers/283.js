const moveZeroes = function (nums) {
  let leftIdx = 0;
  let pointerIdx = 0;

  while (pointerIdx < nums.length) {
    const cur = nums[pointerIdx];

    if (cur !== 0) {
      nums[pointerIdx] = 0;
      nums[leftIdx] = cur;

      leftIdx++;
    }

    pointerIdx++;
  }
  return nums;
};

console.log(moveZeroes([1]));
