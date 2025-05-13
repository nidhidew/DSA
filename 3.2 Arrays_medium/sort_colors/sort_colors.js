// Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions.
let arr = [2,0,2,1,1,0];
let sorted = false;

while(!sorted){
    sorted = true;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] > arr[i+1]){
            let swap = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = swap;
            sorted = false;
        }
    }
}

console.log(arr)