// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// brute force approach
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = arr.length;
let subarray = [];
let s1 = 0;
let fs = -Infinity;

for (let start = 0; start < n; start++) {
  for (let end = start; end < n; end++) {
    s1 += arr[end];
    if (fs < s1) {
      fs = s1;
    }
  }
  s1 = 0;
}
console.log(fs);

let arr2 = [-2,-1];
let subarr = []
let sum = 0;
let final = -Infinity;
for(let i=0;i<arr2.length;i++){
    let tempArr = [];
    for(let j=i;j<arr2.length;j++){
        tempArr.push(arr[j]);
        subarr.push([...tempArr])
    }
}
for(let i=0;i<subarr.length;i++){
    let sumarr = subarr[i];
    for(let k=0;k<sumarr.length;k++){
        sum = sum+sumarr[k];
    }
    if(final < sum){
        final = sum;
        sum = 0;
    }else{
        sum = 0;
    }
}
console.log(final)

//optimal solution
let maxsum = -Infinity;
let currentsum = 0;

for(let i=0;i<arr.length;i++){
    currentsum += arr[i]
    
    if(currentsum > maxsum){
        maxsum = currentsum
    }
    if(currentsum < 0){
        currentsum = 0
    }
}
console.log(maxsum)