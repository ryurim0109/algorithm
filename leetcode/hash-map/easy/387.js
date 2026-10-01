const firstUniqChar = function (s) {
  const map1 = new Map();

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (map1.has(cur)) {
      map1.set(cur, map1.get(cur) + 1);
    } else {
      map1.set(cur, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (map1.has(cur) && map1.get(cur) === 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar('aabb'));
