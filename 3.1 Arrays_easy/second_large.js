// Find second largest in unsorted array

// Brute force approach
let arr = [28004, 23544, 32504, 29493, 17013, 17850, 18952, 12089, 5126, 10353];
let largest = arr[0];
let smallest = arr[0];
let secondArr = -1;
let filteredArr = [...new Set(arr)];

if(filteredArr.length > 2){
    for(let i=0;i<filteredArr.length;i++){
        if(filteredArr[i] > largest){
            largest = filteredArr[i];
        }
        if(filteredArr[i] < smallest){
            smallest = filteredArr[i];
        }
    }
    for(let j=0;j<filteredArr.length;j++){
        if(filteredArr[j] > secondArr && filteredArr[j] != largest){
            secondArr = filteredArr[j]; 
            // once if condition is fulfilled, secondArr value will get updated example 28004 > -1 && 28004 != 32504 , condition is fullfilled and now secondArr = 28004.
        }   
    }
    // console.log(secondArr)
}
else if(filteredArr.length == 2){
    if(filteredArr[1] > filteredArr[0]){
        secondArr = filteredArr[0];
    }else{
        secondArr = largest;
    }
    // console.log(secondArr)
}else if(filteredArr.length < 2 ){
    secondArr = filteredArr[0];
    // console.log(secondArr)
}else{
    // console.log(-1)
}

/* find second largest in the array with sorted array*/

let arr2 = [-3, 0, 2, 4, 7];
let largest2 = arr2[arr2.length - 1];
let smallest2 = arr2[0];
let second_L = arr2[0];

// Optimal Approach
for (let i = 0; i < arr2.length; i++) {
  if (largest > arr2[i + 1] && largest != arr2[i + 1]) {
    second_L = arr2[i + 1];
  }
}
// console.log(second_L);

// Brute Force Approach

for (let i = 1; i < arr2.length; i++) {
  if (largest > arr2[arr2.length - i]) {
    second_L = arr2[arr2.length - i];
    break;
  }
}
// console.log(second_L);

// Find secon largest element for unsorted array

// Brute force approach
let arr3 = [99,85,75,65,60]
let swap = 0;
let sl = arr3[0];
let sorted = false;

while(!sorted){
  sorted = true;
  for(let i=0;i<arr3.length;i++){
    if(arr3[i] > arr3[i+1]){
      swap = arr3[i];
      arr3[i] = arr3[i+1];
      arr3[i+1] = swap;

      sorted = false;
    }
  }
}

// console.log(arr3);
let largest3 = arr3[arr3.length - 1];
let smallest3 = arr3[0];

for(let i=0;i<arr3.length;i++){
  if(arr3[i] < largest3 && arr3[i] > smallest3){
    sl = arr3[i]
  }
}
// console.log(sl);

// Better Approach
let arr4 = [99, 85, 75, 65, 60];
let largest4 = arr4[0];
let second4;

for (let i = 1; i < arr4.length; i++) {
  if (largest4 < arr4[i]) {
    largest4 = arr4[i];
  }
}

for (let i = 0; i < arr4.length; i++) {
  if (i == 0) {
    if (largest4 > arr4[i]) {
      second4 = arr4[i];
    }
  } else if (i > 0 && second4 == undefined) {
    if (largest4 > arr4[i]) {
        second4 = arr4[i];
    }
  } else if (i > 0 && second4 != undefined) {
    if (largest4 > arr4[i] && second4 < arr4[i]){
      second4 = arr4[i];
    }
  }
}

console.log("largest", largest4, "", "second", second4);

//Optimal Approach
let largest5 = -Infinity;
let second5 = -Infinity; // while searching largest value in this will get initialized but cant let have undefined or no value in this variable.

for(let i=0;i<arr4.length;i++){
  if(largest5 < arr4[i]){
    second5 = largest5; // this will prevent duplicates 
    largest5 = arr4[i];
  }else if(arr4[i] < largest5 && arr4[i] > second5){
    second5 = arr4[i];
  }
}
console.log("largest", largest5, "", "second", second5);
