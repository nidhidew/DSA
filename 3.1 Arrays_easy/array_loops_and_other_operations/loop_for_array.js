/* For loops for array itrations  */

let arr = [1,2,3,4,5]

for(let i=0;i<arr.length;i++){
    // console.log(arr[i]) //1,2,3,4,5
} //for 5 time itrations from 0th index to 4th index

for(let i=1;i<arr.length;i++){
    // console.log(arr[i]) //2,3,4,5
} //for 4 time iteration from 1st index to 4th index

for(let i=0;i<arr.length-1;i++){
    // console.log(arr[i]); //1,2,3,4
} //for 4 time iteration from 0th index to 3rd index

for(let i=1;i<arr.length-1;i++){
    // console.log(arr[i]) //2,3,4
} //for 3 time iteration from 1st index to 3rd index