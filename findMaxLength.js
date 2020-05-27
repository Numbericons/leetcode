var findMaxLength = function (nums) {
  const max = nums.length - 1;
  let count = 0;

  for (let z=0; z<nums.length; z++) {
    if (count === max) break;
    for (let o = nums.length-1; o > 0; o--) {
      let segment = nums.slice(z, o+1);
      if (!segment.length) continue;
      let sum = segment.reduce((a,b) => a + b);
      if (count < segment.length && sum === segment.length / 2) count = segment.length;
    }
  }
  return count;
};
findMaxLength([0, 1])
//iterate nums
// [0,1]
//   short circuit if get to a point where more than 1/2 of max possible length is a single value
//given segment
//  needs to sum to the length of the segment divided by 2
// reduce to grab sum
// get length, divide by 2