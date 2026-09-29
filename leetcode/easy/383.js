const canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  for (let i = 0; i < magazine.length; i++) {
    const cur = magazine[i];
    if (map.has(cur)) {
      map.set(cur, map.get(cur) + 1);
    } else {
      map.set(cur, 1);
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const cur = ransomNote[i];
    if (!map.has(cur)) return false;
    if (map.has(cur) && !map.get(cur)) return false;
    map.set(cur, map.get(cur) - 1);
  }
  return true;
};

console.log(canConstruct('aa', 'aab'));
