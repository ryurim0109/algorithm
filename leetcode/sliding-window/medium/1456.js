const maxVowels = (s, k) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let leftIdx = 0;
  let count = 0;
  let result = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      count += 1;
    }
  }

  if (s.length <= k) {
    return count;
  }

  result = count;
  while (leftIdx + k < s.length) {
    if (vowels.has(s[leftIdx])) {
      count -= 1;
    }
    if (vowels.has(s[leftIdx + k])) {
      count += 1;
    }

    if (result < count) {
      result = count;
    }
    leftIdx++;
  }
  return result;
};

console.log(maxVowels('a', 1));
