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
    console.log(secondArr)
}
else if(filteredArr.length == 2){
    if(filteredArr[1] > filteredArr[0]){
        secondArr = filteredArr[0];
    }else{
        secondArr = largest;
    }
    console.log(secondArr)
}else if(filteredArr.length < 2 ){
    secondArr = filteredArr[0];
    console.log(secondArr)
}else{
    console.log(-1)
}

/* second largest in the array */

let arr2 = [-3, 0, 2, 4, 7]; //sorted array
let largest2 = arr2[arr2.length - 1];
let smallest2 = arr2[0];
let second_L = arr2[0];

// Optimal
for (let i = 0; i < arr2.length; i++) {
  if (largest > arr2[i + 1] && largest != arr2[i + 1]) {
    second_L = arr2[i + 1];
  }
}
// console.log(second_L);

// Brute Force

for (let i = 1; i < arr2.length; i++) {
  if (largest > arr2[arr2.length - i]) {
    second_L = arr2[arr2.length - i];
    break;
  }
}
console.log(second_L);

// Brute force approach for unsorted array
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

console.log(arr3);
let largest3 = arr3[arr3.length - 1];
let smallest3 = arr3[0];

for(let i=0;i<arr3.length;i++){
  if(arr3[i] < largest3 && arr3[i] > smallest3){
    sl = arr3[i]
  }
}
console.log(sl);

