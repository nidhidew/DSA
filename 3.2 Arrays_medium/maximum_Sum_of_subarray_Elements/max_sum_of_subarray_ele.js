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