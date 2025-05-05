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
let arr2 = [5,51,4,7,8]
let target2 = 51
let index2 = null;
for(let i=0;i<arr2.length;i++){
  if(arr2[i] == target2){
    index2 = i;
    i = arr2.length
  }else{
    index2 = -1;
  }
}
console.log(index);
