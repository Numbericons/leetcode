/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = 0;
  for (let z = 0; z < candies.length; z++) { if (candies[z] > max) max = candies[z] }
  candies.map(candy => candy + extraCandies >= max)
  return candies;
};


kidsWithCandies([2, 3, 5, 1, 3], 3);
//iterate through candies array, find the max
//map through the candies array
//current element is true if the elements value + extraCandies is >= max