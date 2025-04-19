// Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays. brute force approach

let arr1 = [1,2,3,4,5,6,7,8,9,10];
let arr2 = [2,3,4,4,5,11,12];
let merged = [...arr1, ...arr2];
let sorted = false;
let j = 1;
while (!sorted) {
  sorted = true;
  for (let i = 0; i < merged.length - 1; i++) {
    if (merged[i] > merged[i + 1]) {
      swap = merged[i];
      merged[i] = merged[i + 1];
      merged[i + 1] = swap;

      sorted = false;
    }
  }
}
for (let i = 0; i < merged.length; i++) {
  if(merged[i] != merged[j-1]){
    merged[j] = merged[i];
    j++;
  }
}
merged.length = j
console.log(merged);
