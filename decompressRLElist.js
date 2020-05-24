var decompressRLElist = function (nums) {
  let arr = [];
  for (let z=0; z < nums.length -1; z+=2) {
    for (let x=0; x < nums[z]; x+=1) { arr.push(nums[z+1]) }
  }
  return arr;
};

//iterate through nums

//check if one less than the length which would check for odd lengths
//increate index variable by 2 each pass

