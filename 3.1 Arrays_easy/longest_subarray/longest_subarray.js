// Given an array and a sum k, we need to print the length of the longest subarray that sums to k. (for positive sum value)
/*Example 1:
Input Format: N = 3, k = 5, array[] = {2,3,5}
Result: 2
Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.*/

let arr = [2,3,5]
let subarr = []
let sum = 0
let k = 5

for(let i=0;i<arr.length;i++){
    if(sum+arr[i] <= k){
        sum = sum+arr[i]
        subarr[i] = arr[i];
    }
    else if(sum+arr[i] == k ){
        subarr[i] = arr[i]
    }
}

console.log(subarr)

//for positive and negative sum value
let arr2 = [2,3,5]
let subarr2 = [arr2[0]]
let sum2 = arr2[0]
let k2 = 5

for(let i=1;i<arr2.length;i++){
    if(sum2+arr2[i] != k2){
        sum2 = sum2+arr2[i]
        subarr2[i] = arr2[i];
    }
    else if(sum2+arr2[i] == k2 ){
        subarr2[i] = arr2[i]
        break;
    }
}

console.log(subarr2)