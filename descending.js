var checkPossibility = function (nums) {
  let change = false;

  for (let i = 1; i < nums.length - 1; i++) {
    let pre = nums[i-1]
    let cur = nums[i];
    let nxt = nums[i + 1];

    if (cur < pre) {
      if (change) return false;

      change = true;
      nums[i - 1] = nums[i];
      i = -1;
    } else if (cur > nxt) {
      if (change) return false;

      change = true;
      (nums[i-1] > nums[i+1]) ? nums[i+1] = nums[i] : nums[i] = nums[i+1];
      i = -1;
    }
  }
  return true;
};

// const test = checkPossibility([2, 3, 3, 2, 4]);  //change 3rd (nxt)
const test = checkPossibility([-1, 4, 2, 3]);   //change 2nd (curr)
// const test = checkPossibility([4,2,3]);
console.log(test);