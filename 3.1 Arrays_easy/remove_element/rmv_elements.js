// optimal approach to remove elements

let nums = [3,2,2,3];
let val = 3;
let j = 0;

for(let i=0;i<nums.length;i++){
    if(nums[i] != val){
        nums[j] = nums[i];
        j++;
    }
}
nums.length = j
console.log(nums);
