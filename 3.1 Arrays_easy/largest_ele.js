let arr = [8,4,1];

// brute force
let sorted = arr.sort((a,b)=>a-b);
let len = sorted.length;
console.log(sorted[len-1]);
// return sorted[len-n]

// optimal
let largest = arr[0]; //arr[0] ist element is considered largest
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){ //compared the considered largest and other elements of the arr to find true largest
        largest = arr[i];   
        //once condition is fullfilled; largest value gets updated till largest value is found.
    }
}
console.log(largest);    
// return largest