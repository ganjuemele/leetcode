//70
var removeElement = function(nums, val) {
  let newL = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    } else {
      newL++;
    }
  }
};
