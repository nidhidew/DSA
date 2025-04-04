/* Que:- largest element in a array */

// Brute force

let arr = [-5, -1, -10, -3]
let isSorted = false;

while(!isSorted){
    isSorted = true;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > arr[i+1]){
            swap = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = swap;
            isSorted = false;
        }
    }
}
// console.log(arr[arr.length-1]);

// Optimal

largest = arr[0];
for(let i=0;i<arr.length;i++){
    if(largest < arr[i]){
        largest = arr[i]
    }
}
console.log(largest);