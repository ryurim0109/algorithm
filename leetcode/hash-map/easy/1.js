// 문제: 두 수의 합
// 정수 배열 nums와 정수 target이 주어진다.
// 배열 안에서 서로 다른 두 원소를 골라 합이 target이 되도록 해야 한다.
// 조건을 만족하는 두 원소의 인덱스를 반환해라.
// 예시:
// nums = [2, 7, 11, 15]
// target = 9
// 정답:
// [0, 1]
// 왜냐하면:
// nums[0] + nums[1]
// = 2 + 7
// = 9
// 또 다른 예시:
// nums = [3, 2, 4]
// target = 6
// 정답:
// [1, 2]
// 함수 형태는 이렇게 시작하면 돼.
// function twoSum(nums: number[], target: number): number[] {
// }

// 조건은 이렇게 생각하면 된다.

// - 같은 원소를 두 번 사용할 수 없음
// - 정답은 하나 존재한다고 가정
// - 가능하면 O(n²)보다 빠르게 풀기

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const need = target - current;

    if (map.has(need)) {
      return [map.get(need), i];
    }

    map.set(current, i);
  }
}

console.log(twoSum([1, 3, 4, 9], 4));
