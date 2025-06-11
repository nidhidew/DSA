// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

let arr = [7,-9,3,-6,3,5,3,6,-2,-5,8,6,-4,-6,-4,-4,5,-9,2,7,0,0];
let newarr = [...new Set(arr)].sort((a, b) => a - b);
console.log(newarr);
let count = 1;
let maxcount = 0;
let num = newarr[0];

if (newarr.length == 1) {
  maxcount = count;
} else if (newarr.length > 1) {
  for (let i = 1; i < newarr.length; i++) {
      if (newarr[i] == (num + 1)) {
          console.log("newarr:",newarr[i],"num:",num,"count:",count,"maxcount:",maxcount,"comparison:",newarr[i] == (num+1))
      count++;
      num = newarr[i];
      if (i == newarr.length - 1 && maxcount < count) {
        maxcount = count;
      }
    } else if (newarr[i] != (num + 1)) {
        console.log("newarr:",newarr[i],"num:",num,"count:",count,"maxcount:",maxcount,"comparison:",newarr[i] == (num+1))
      if (maxcount <= count) {
        maxcount = count;
        
      }
      count = 1;
      num = newarr[i];
    } else {
    }
  }
}

console.log("maxcount:", maxcount);
