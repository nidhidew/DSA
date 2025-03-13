let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let rotate = new Array(nums.length);

for(let i=0;i<nums.length;i++){
    const newIndex = (i+k) % (nums.length);
    rotate[newIndex] = nums[i];
}
console.log(rotate);

/**
 let arr = [1, 2, 3, 4, 5];
let k = 2;
let n = arr.length;

let rotated = new Array(n);

for (let i = 0; i < n; i++) {
    let newIndex = (i + k) % n;
    rotated[newIndex] = arr[i];
}

console.log(rotated); // Output: [4, 5, 1, 2, 3]
 */