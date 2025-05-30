// (1) fixed window size(e.g. subarray of size k)
/** when in a question tells/asked about:
 * Find the maximum sum of any subarray of size k
 * Find the average of every window of size k
 * Count of items in each group of k elements
 * Analyze fixed-length time intervals, subarrays, or chunks
 */

let arr = [2,1,5,1,3,2];
let k = 3;
let maxSum = 0;
let windowSum = 0;
for (let i = 0; i < k; i++) {
  windowSum = windowSum + arr[i];
}
maxSum = windowSum;
//slide the window forward
for (let j = k; j < arr.length; j++) {
  windowSum = windowSum + arr[j] - arr[j-k]; // slide the window
  maxSum = Math.max(maxSum, windowSum); // update max if needed
}
console.log(maxSum)

// (2) dynamic window size(e.g. maximum subarray)
/** when in a question tells/asked about:
 * Have sum ≤ or ≥ k
 * Contain unique elements
 * Contain at most k distinct elements
 * Match a pattern or all target characters
*/

/*ALGORITHM */

// let i=0; //start point of window
// let windowsum = 0;
// for(let j=0;j<arr.length;j++){ //j is end point of window
//   windowsum = windowsum + arr[j];
//   while(/*window does not satisfy the condition*/){
//     //shrink the window from the left
//     //update the state
//     i++;
//   }
//   let windowsum = j-i+1;
// }