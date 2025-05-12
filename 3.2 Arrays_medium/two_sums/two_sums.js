/*Brute force for Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.*/

let nums = [2, 7, 11, 15];
let target = 9;
let pointer = 0;
let output = [];
let exists = false;

while (!exists) {
  exists = true;
  for (let i = 1; i < nums.length; i++) {
    if (pointer != i && nums[pointer] + nums[i] == target) {
      output = [pointer, i];
      exists = true;
    } else if (pointer != i && nums[pointer] + nums[i] != target && i == nums.length - 1) {
      pointer++;
      exists = false;
    }
  }
}
console.log(output);

// optimal approach using hashmap for O(n) time complexity

function twoSum(nums, target) {
    let map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
  
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
  
      map.set(nums[i], i);
    }
  }
  