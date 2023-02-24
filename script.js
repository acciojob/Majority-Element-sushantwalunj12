//your code here
function majorityElement(nums) {
  let temp = 0;
  let abc = nums[0];
  
  for (let i = 0; i < nums.length; i++) {
    if (temp === 0) {
      abc = nums[i];
    }
    
    if (nums[i] === abc) {
      temp++;
    } else {
      temp--;
    }
  }
  
  return abc;
}
