const containsDuplicate = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (map.has(current)) {
      return true;
    }

    map.set(current, i);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
