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

//brute force for Left Rotate the Array by One
let arr = [1,2,3,4,5]
let pointer = arr[0]
for(let i=1;i<arr.length;i++){
    arr[i-1] = arr[i]
}
arr[arr.length-1] = pointer;
console.log(arr);

