// Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or
// print -1
let num = [1,2,3,4,5]
let target = 3
let index = null;
for(let i=0;i<num.length;i++){
    if(num[i] == target){
        index = i;
    }
}
console.log(index);

// Given an array of integers nums and an integer target, find the smallest index (0 based indexing) where the target appears in the array. 
// If the target is not found in the array, return -1
