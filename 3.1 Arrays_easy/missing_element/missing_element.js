// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Brute force (O(N log N))
let nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14];
nums = nums.sort((a,b) => a-b);
let missing = null;

if (nums[0] == 0 && nums.length >= 2) {
  let pointer = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (pointer != nums[i]) {
      missing = pointer;
    } 
    else {
      ++pointer;
    }
  }
  console.log("1st",missing);
} 
else if(nums[0] == 0 && nums.length < 2){
    missing = ++nums[0];
    console.log(missing);
}
else if (nums[0] != 0 && nums.length < 2) {
    missing = --nums[0];
    console.log("2nd",missing);
} else if (nums[0] != 0 && nums.length >= 2) {
    missing = --nums[0];
    console.log("3rd",missing);
} else {
}

//or (O(n))
let total = nums[0];
let expectedSum = nums.length * (nums.length + 1) /2 // calculating expected sum of the array elements 
for(let i=1;i<nums.length;i++){
    total += nums[i] // calculating current sum of the array elements
}

console.log(expectedSum-total); //calculating missing element value by finding difference between expected and current sum's of the elements

//or
let arr = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14];
let missing = 0;
let j = 1;
arr = arr.sort((a,b) => a-b);
for(let i=0;i<arr.length;i++){
    if(arr[0] != 0){
        missing = 0;
    }else if(arr[0] == 0){
        if(arr[i]+1 != arr[j]){
            missing = arr[i]+1;
            break;
        }
        else{
            j++;
        }
    }else{
        
    }
}
console.log(missing);

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would 
// be if it were inserted in order.
let nums2 = [1,3,5,6]
let target2 = 4
let index = nums.length

for(let i=0;i<nums2.length;i++){
    if( target2 <= nums[i]){
        index = i
        break;
    }
}

console.log("index",index);
