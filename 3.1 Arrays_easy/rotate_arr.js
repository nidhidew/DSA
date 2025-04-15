// brute force for Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
let arr1 = [10,20,30,40];
let pointer1 = null;
let k1 = 6;
let count = 0;

while (count < k1) {
  pointer1 = arr1[arr1.length - 1];
  for (let i = arr1.length - 1; i > 0; i--) {
    arr1[i] = arr1[i - 1];
  }
  arr1[0] = pointer1;
  ++count;
}
console.log(arr1);

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let rotateArr = new Array(nums.length);

for(let i=0;i<nums.length;i++){
    const newIndex = (i+k) % (nums.length);
    rotateArr[newIndex] = nums[i];
}
for(let j=0;j<nums.length;j++){
    nums[j] = rotateArr[j];
}
console.log(nums);

// brute force for Left Rotate the Array by One
let arr = [1,2,3,4,5]
let pointer = arr[0]
for(let i=1;i<arr.length;i++){
    arr[i-1] = arr[i]
}
arr[arr.length-1] = pointer;
console.log(arr);

// Optimal Approach
function rotate(arr, k) {
  // Step 1: Normalize k to avoid unnecessary rotations
  k = k % arr.length;

  // Step 2: Reverse a portion of the array (helper function)
  function reverse(start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  // Step 3: Reverse the first part (0 to n - k - 1)
  reverse(0, arr.length - k - 1);

  // Step 4: Reverse the second part (n - k to n - 1)
  reverse(arr.length - k, arr.length - 1);

  // Step 5: Reverse the entire array (0 to n - 1)
  reverse(0, arr.length - 1);
}

// Test the function
let arr = [1, 2, 3, 4, 5, 6, 7];
let k2 = 3;

rotate(arr, k);
console.log(arr);  // Output: [5, 6, 7, 1, 2, 3, 4]
