const isPalindrome = function (s) {
  const newS = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  let leftIdx = 0;
  let rightIdx = newS.length - 1;

  while (leftIdx < rightIdx) {
    const left = newS[leftIdx];
    const right = newS[rightIdx];

    if (left !== right) return false;
    leftIdx++;
    rightIdx--;
  }

  return true;
};

console.log(isPalindrome('race a car'));
