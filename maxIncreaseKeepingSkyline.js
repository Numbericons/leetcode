/**
 * @param {number[][]} grid
 * @return {number}
 */

function add(val, num) {
  return val + num;
}

function reduceGrid(grid) {
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    sum += grid[i].reduce(add);
  }
  return sum;
}

var maxIncreaseKeepingSkyline = function (grid) {
  let initial = reduceGrid(grid);
  for (let i = 0; i < grid.length; i++) {
    let horzMax = -Infinity;
    for (let k = 0; k < grid[i].length; k++) {
      if (horzMax < grid[i][k]) horzMax = grid[i][k];
    }
    for (let j = 0; j < grid[i].length; j++) {
      let vertMax = grid[i][j];
      for (let t = 0; t < grid.length; t++) {
        if (vertMax < grid[t][j]) vertMax = grid[t][j];
      }
      grid[i][j] = (horzMax < vertMax) ? horzMax : vertMax;
    }
  }
  return reduceGrid(grid) - initial;
};

let result = maxIncreaseKeepingSkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]);
// [[3, 0, 8, 4]
//  [2, 4, 5, 7]
//  [9, 2, 6, 3]
//  [0, 3, 1, 0]]);
console.log(result);


//top bottom at given index in each sub array  i.e. 0  --> look through each sub array at idx and get max
// left right at given subarray --> look through each sub array and get max

//  for loop on outter array
//  calc max for subarray
//  check against max of rest of sub arrays at given index   <<<
//  take lower of two max and set as value
