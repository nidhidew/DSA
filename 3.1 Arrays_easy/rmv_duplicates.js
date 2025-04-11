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

//Brute force
let arr = [0,0,1,1,1,2,2,3,3,4];
let pointer = Infinity;
let swap = null;
let pos = 0;

for (let i = 0; i < arr.length; i++) {
  if (pointer === arr[i]) {
    pointer = arr[i];
    arr[i] = null;
  } else {
    pointer = arr[i];
  }
  if (arr[i] != null) {
    swap = arr[i];
    arr[i] = arr[pos];
    arr[pos] = swap;
    pos++;
  }
}
while (arr[arr.length - 1] == null) {
  --arr.length;
}

console.log(arr);
