// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

let arr = [2, 2, 2, 3, 3];
let c1 = 1;
arr = arr.sort((a, b) => a - b); //2,2,2,3,3
let n = arr.length;
let final = null;

if (n < 2) {
  final = arr[0];
} else {
  for (let j = 0; j < n - 1; j++) {
    if (arr[j] == arr[j + 1]) {
      c1++;
      final = arr[j];
    } else if (arr[j] != arr[j + 1]) {
      if (c1 > n / 2) {
        final = arr[j];
        break;
      } else if (c1 < n / 2) {
        c1 = 1;
        final = 0;
        continue;
      }
    }
  }
}
console.log(final);
