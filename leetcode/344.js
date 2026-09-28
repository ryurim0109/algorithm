const reverseString = function (s) {
  let leftIdx = 0;
  let rightIdx = s.length - 1;

  while (leftIdx < rightIdx) {
    const left = s[leftIdx];
    const right = s[rightIdx];

    s[leftIdx] = right;
    s[rightIdx] = left;
    leftIdx++;
    rightIdx--;
  }
  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
