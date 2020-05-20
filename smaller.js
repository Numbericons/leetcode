var smallerNumbersThanCurrent = function (nums) {
  return nums.map((num,i) => {
    let count = 0;
    for (let z=0; z<nums.length; z++) { 
      if (i !== z && num > nums[z]) count +=1;
    }
    return count;
  })
};

//iterate array
// iterate again through array and look all the other elements that current element to determine the count of how many are smaller
//probably use map on the outer loop

smallerNumbersThanCurrent([6, 5, 4, 8]);