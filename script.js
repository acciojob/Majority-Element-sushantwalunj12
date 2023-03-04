function majorityElement(nums) {
  let count = 0;
  let candidate = null;
  
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }
  
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    }
  }
  
  if (count > Math.floor(nums.length / 2)) {
    return candidate;
  } else {
    return null; 
  }
}

// console.log(majorityElement([2, 1, 2])); 
