let arr = [5,4,6,7,8];
console.log(arr )
console.log(arr.sort())
// console.log(arr === arr.sort())
// if(arr === arr.sort()){
//     console.log(true)
// }else{
//     console.log(false)
// }

/*
var check = function(nums) {
    let newNums = [...nums].sort();
    let numsEle = nums[0];

function rotate(arr,x){
    for(let j=0;j<x;j++){
        arr.push(arr.shift());
    }
}
    if(nums.length == 1){
        return true;
    }else if(nums.length >= 2){
        for(let i=1;i<nums.length;i++){
            if(numsEle <= nums[i]){
                numsEle = nums[i];
                return true;
            }
            else if(numsEle > nums[i]){
                rotate(nums,i)
                numsEle = nums;
                if(newNums.every((val, index) => val === numsEle[index])){
                    return true;
                }else if(newNums.every((val, index) => val !== numsEle[index])){
                    return false;
                }
            }
        }
    }
};
*/
