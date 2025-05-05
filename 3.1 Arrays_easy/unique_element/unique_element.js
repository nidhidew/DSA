let nums = [4, 1, 2, 1, 2];
nums = nums.sort();
let unique = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (nums[i] == nums[i + 1]) {
    i += 1;
  } else {
    unique = nums[i];
  }
}
console.log(unique);
