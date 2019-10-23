var twoSum = function(nums, target) {
    let valObj = {};
    
    for(let i = 0; i < nums.length; i++) {
        valObj[nums[i]] ? valObj[nums[i]].push(i) : valObj[nums[i]] = [i];
    }
    for(let j = 0; j < nums.length; j++) {
        let diff = target - nums[j];
        if (diff === nums[j]) {
            if (valObj[diff].length > 1) {
                return (valObj[diff][0] !== j) ? [valObj[diff][0], j] : [valObj[diff][1], j];
            }
        } else {
            if (valObj[diff]) return [valObj[diff][0], j];
        }
    }
    return null;
};

// let result = twoSum([1,3,4,2], 6);
let result = twoSum([3,3], 6);
console.log(result);