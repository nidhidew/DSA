// You are given an array arr of positive integers. Your task is to find all the leaders in the array. An element is considered a leader 
// if it is greater than or equal to all elements to its right. The rightmost element is always a leader.

let arr = [5, 10, 20, 40];
let maxsofar = arr[arr.length-1];
let leader = [];
leader.push(maxsofar);

for(let i=arr.length-2;i>=0;i--){
    if(arr[i] >= maxsofar){
        maxsofar = arr[i];
        leader.push(maxsofar);
    }
}

console.log(leader.sort((a,b)=>b-a));