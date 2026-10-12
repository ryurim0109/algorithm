const findMaxAverage = (nums, k) => {
  let leftIdx = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let result = sum;

  while (leftIdx + k <= nums.length) {
    sum = sum - nums[leftIdx] + nums[leftIdx + k];
    if (result < sum) {
      result = sum;
    }
    leftIdx++;
  }
  return result / k;
};

console.log(findMaxAverage([5], 1));
