// let nums = [2, 1, 3, 4];
// let nums = [3,4,5,1,2];
let nums = [3,6,10,1,8,9,9,8,9];
let countDrop = 0;
let n = nums.length;

for (let i = 0; i < n; i++) {
    // Check if the next element is smaller than the current element
    if (nums[i] > nums[(i + 1) % n]) {
        countDrop++;
    }
    // If there is more than one drop, it's not a rotated sorted array
    if (countDrop > 1) {
        return false;
    }
}

// return true;
console.log(true);


// How It Works:

//     Loop through the array.
//     If nums[i] > nums[(i + 1) % n] → It’s a drop.
//     If the number of drops exceeds 1 → Return false.
//     If the loop finishes with zero or one drop → Return true.

/* If an array is rotated, there will be exactly one drop where the largest element meets the smallest element.If it’s completely sorted (no rotation), 
 there will be zero drops.*/

// to check that array is sorted in increasing order or not (optimal solution)
let arr = [1,1];
let checked = true;
let pointer = arr[0]

if (arr.length <= 1) {
  checked = true;
} else if (arr.length > 1) {
  for (let i = 1; i < arr.length; i++) {
    if (pointer > arr[i]) {
      checked = false;
    }
    pointer = arr[i];
  }
}
console.log(checked);
