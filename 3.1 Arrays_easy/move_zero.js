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