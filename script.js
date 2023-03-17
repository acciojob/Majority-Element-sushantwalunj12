 function majorityElementChecker(nums)
    {
        let map = new Map();
 
        for(let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                    let count = map.get(nums[i]) +1;
                    if (count > nums.length /2) {
                        return nums[i];
                    } else
                        map.set(nums[i], count);
 
            }
            else
                map.set(nums[i],1);
            }
            return 1;
    }

module.exports = majorityElementChecker;