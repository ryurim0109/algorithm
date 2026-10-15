const lengthOfLongestSubstring = (s) => {
  const repeatSet = new Set();
  let leftIdx = 0;
  let rightIdx = 0;
  let result = 0;

  while (rightIdx < s.length) {
    const left = s[leftIdx];
    const right = s[rightIdx];

    if (!repeatSet.has(right)) {
      repeatSet.add(right);
      rightIdx++;
      result = Math.max(result, rightIdx - leftIdx);
    } else {
      leftIdx++;
      repeatSet.delete(left);
    }
  }
  return result;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
