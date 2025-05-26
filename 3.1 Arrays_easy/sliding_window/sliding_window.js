let arr = [2,1,5,1,3,2];
let k = 3;
let maxSum = 0;
let windowSum = 0;
let start = 0;
for (let i = 0; i < k; i++) {
  windowSum = windowSum + arr[i];
}
maxSum = windowSum;

//slide the window forward
for (let end = k; end < arr.length; end++) {
  windowSum = windowSum + arr[end] - arr[start]; // slide the window
  start++;                            // move start forward
  maxSum = Math.max(maxSum, windowSum); // update max if needed
}

console.log(maxSum)