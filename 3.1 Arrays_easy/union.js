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

// better approach
let merged = [...arr1, ...arr2];
merged = merged.sort();
merged = [...new Set(merged)];

console.log(merged);

// later do this:
// ### 🔍 Hint 1: Efficient Sorting
// Instead of bubble sort, think of a more optimal **comparison-based sorting algorithm** you can write manually, such as:
// - Starts by dividing the array
// - Merges while sorting
// - Has a time complexity of **O(N log N)**

// ---

// ### 🧠 Hint 2: Use an Object for Uniqueness
// To remove duplicates **without using `Set`**, maintain a simple **object** to track seen values.  
// - Keys will act like a set of seen numbers
// - Add a value to the result only if it’s not already present in the object

// ---

// ### 🔁 Hint 3: Traverse Once
// You can:
// 1. Sort the merged array (with your custom sorting logic)
// 2. Traverse it **once** to collect only **unique** values into a new array

// ---

// Let me know if you want hints to build the sort algorithm as well (like Merge Sort or Quick Sort) — we can tackle that next 💪