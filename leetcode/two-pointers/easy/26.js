const removeDuplicates = function (nums) {
  let slowIdx = 0;
  let fastIdx = 1;
  let count = 0;

  while (fastIdx < nums.length) {
    const slow = nums[slowIdx];
    const fast = nums[fastIdx];

    if (slow === fast) {
      fastIdx++;
      count++;
    } else {
      nums[slowIdx + 1] = fast;
      slowIdx++;
      fastIdx++;
    }
  }
  return slowIdx + 1;
};

console.log(removeDuplicates([1, 1, 2]));
