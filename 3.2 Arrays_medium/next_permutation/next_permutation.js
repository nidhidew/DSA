// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

let nums = [1,2,3]
let n = arr.length;
let i = n - 2;

// Step 1: Find first decreasing index from the end
while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
}

if (i >= 0) {
    // Step 2: Find element just larger than arr[i] from the right
    let j = n - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }

    // Step 3: Swap arr[i] and arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Step 4: Reverse the suffix from i+1 to end
let left = i + 1;
let right = n - 1;
while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
}

console.log(arr);
