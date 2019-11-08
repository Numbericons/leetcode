/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let spiral = [];
    let currNum = 1;
    for(let i=0; i < n; i++) {
        spiral.push([]);
        // spiral[0].push(currNum);
        currNum++;   //[[],[],[]] 
    };
}

var loop = function(array, currNum){ // starting x and y ?
    //travel right
    // array[0][0] = curNum
    // iterate across array[0] adding curNum to array[0][i] and incrementing curNum
    
    //travel down
    
    // iterate array[array[0].length -1][1] until reach array[0].length
    //travel left
    // iterate array[array[0].length - 1][array[0].length - 2] until reach 0
    //travel up
    // iterate array[array[0].length - 2][0] until reach 1
}

// input size determines # of sub arrayds
// length of each sub array === n
// 1. create first sub array with first n numbers [0,0] [0,1] [0,2]
// 2. magic function to d
// don't want to hardcode how to add individual rows, columns based on pattern
//   cord, currNum inputs    // [1,2] => [n-2, n-1]     curr= 4 || total elements 3
//                              [2,2] => [n-1, n-1] 
//                              [2,1] => [n-1, n-2]
//                              [2,0] => [n-1, n-3] 
//                              [1,0] => [n-2, n-3]
//                              [1,1] => [n-2, n-2]
// function nextCord(spiral, curr)  => outputs cordinate to add curr  **could track total el's added

// n = 5
// [1,2,3,4,      5],    // XX [[1,2,3,4,5],[],[],[],[]] X
// [16,17,18,19,  6]
// [15,24,25,20,  7]
// [14,23,22,21,  8]
// [13,12,11,10,  9]
// right down left up until reaching the end of the arrays length or length of sub arrays