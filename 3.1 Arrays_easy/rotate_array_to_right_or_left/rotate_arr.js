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

//or

//Brute force approach for right side direction rotation
let arr3 = [1,2,3,4,5,6,7]
let k3 = 2;
let j = 0
while(j<k){
    let point = arr3[arr3.length-1]
    for(let i=arr3.length-1;i>0;i--){
        let swap = arr3[i-1];
        arr3[i-1] = arr3[i-2];
        arr3[i] = swap;
    }
    arr3[0] = point
    j++;
}
console.log(arr3)
//or

// Optimal Approach
function operate(array, steps) {
  let n = array.length;
  steps = steps % n;
  function rotate(start, end) {
    while (start < end) {
      let temp = array[start];
      array[start] = array[end];
      array[end] = temp;

      start++;
      end--;
    }
  }
  rotate(0, n - steps - 1); //1st rotation for front part which will go to back
  rotate(n - steps, n - 1); //2nd rotation for back part which will go to front
  rotate(0, n - 1); //full rotation for all the elements as long as while loop condition is satisfied
}
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let k2 = 3;

operate(arr2, k2);
console.log(arr2);

// brute force for Left Rotate the Array by One
let arr = [1,2,3,4,5]
let pointer = arr[0]
for(let i=1;i<arr.length;i++){
    arr[i-1] = arr[i]
}
arr[arr.length-1] = pointer;
console.log(arr);

//or

let arr4 = [3,7,8,9,10,11]
let k4 = 3;
let j4 = 0
while(j4<k4){
    let point = arr4[0]
    for(let i=1;i<arr4.length;i++){
        let swap = arr4[i];
        arr4[i] = arr4[i+1];
        arr4[i-1] = swap;
    }
    arr4[arr4.length-1] = point
    j++;
}
console.log(arr4)