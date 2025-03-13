// let nums = [1,1,2,2,3,4,4]
let nums = [0,0,1,1,1,2,2,3,3,4]
// let nums = [1,1,2];

let k=0;
let j=0;
for(let i=0;i<nums.length;i++){
    if(i==0 || nums[i] != nums[i-1]){
        nums[j]=nums[i]
        j++;
        
    }
}
k=j;
console.log(k,nums);