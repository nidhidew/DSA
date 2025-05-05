//brute force for Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
let arr = [0, 0, 1, 2];
let exists = false;

while (!exists) {
  exists = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == 0 && arr[i+1] != 0) {
      let swap = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = swap;
      exists = false;
    }
  }
}
console.log(arr);


let nums = [0, 1, 0, 3, 12];
let j = 0;
for(let i=0;i<nums.length;i++){
  if(nums[i] != 0){
    nums[j] = nums[i];
    j++;
  }
  // console.log(nums);
}
for(let i=j;i<nums.length;i++){
  nums[i] = 0
}
console.log(nums);





// let nums = [0]
// let movedArray = new Array(nums.length)
// let newIndex = 0;
// for(let i=0;i<nums.length;i++){
//   if(nums[i] != 0){
//     movedArray[newIndex] = nums[i];
//     newIndex++; 
//   }  
// }
// for(let j=0;j<movedArray.length;j++){
//   if(movedArray[j] == undefined){
//     movedArray[j] = 0
//   }
// }
// nums = movedArray
// console.log(nums);