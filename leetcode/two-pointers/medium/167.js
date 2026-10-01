const twoSum = function (numbers, target) {
  let leftIdx = 0;
  let rightIdx = numbers.length - 1;

  while (leftIdx < rightIdx) {
    const left = numbers[leftIdx];
    const right = numbers[rightIdx];

    const cur = left + right;

    if (target < cur) {
      rightIdx--;
    }
    if (cur < target) {
      leftIdx++;
    }
    if (target === cur) {
      break;
    }
  }
  return [leftIdx + 1, rightIdx + 1];
};

console.log(twoSum([2, 7, 11, 15], 9));
