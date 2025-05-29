// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should return the array of nums such that the the array follows the given conditions:
// *Every consecutive pair of integers have opposite signs.
// *For all integers with the same sign, the order in which they were present in nums is preserved.
// *The rearranged array begins with a positive integer.
// *Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

//brute force approach
let nums = [3,1,-2,-5,2,-4];
let checked = false
while(!checked){
    checked = true;
    for(let i=0;i<nums.length-1;i++){
        if(i%2!=0 && nums[i]>0){
            swap = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = swap;
            checked = false;
        }else if(i%2==0 && nums[i]<0){
            swap = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = swap;
            checked = false;
        }
    }
}
console.log(nums);

// optimal approach
let pos = [];
let j = 0;
let neg = [];
let k = 0;
let a = 0;
let b = 0;
for(let i=0;i<nums.length;i++){
    if(nums[i] > 0){
        pos[j] = nums[i];
        j++;
    }else if(nums[i] < 0){
        neg[k] = nums[i];
        k++;
    }else{
        
    }
}
for(let i=0;i<nums.length;i++){
    if(i%2 == 0){
        nums[i] = pos[a];
        a++;
    }else if(i%2 != 0){
        nums[i] = neg[b];
        b++;
    }
}
console.log(nums);
