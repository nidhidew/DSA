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
