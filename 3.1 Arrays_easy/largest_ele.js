// let arr = [8,4,1];

// // brute force
// let sorted = arr.sort((a,b)=>a-b);
// let len = sorted.length;
// console.log(sorted[len-1]);
// // return sorted[len-n]

// // optimal
let largest = arr[0]; //arr[0] ist element is considered largest
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){ //compared the considered largest and other elements of the arr to find true largest
        largest = arr[i];
        //once condition is fullfilled; largest value gets updated till largest value is found.
    }
}
console.log(largest);
// // return largest

// another approach(but time complexity is high)
let arr2 = [];
let swap = 0;
let isSorted = false;
let index = 0;

if (arr.length <= 1) {
  return false;
} else if (arr.length >= 2) {
  if (arr[0] < arr[1]) {
    return arr[1];
  } else if (arr[0] > arr[1]) {
    return arr[0];
  } else if (arr[0] == arr[1]) {
    return "elements are same";
  } else {
  }
} else if (arr.length > 2) {
  for (let i = 0; i < arr.length; i++) {
    let exists = false;
    for (let j = 0; j < index; j++) {
      if (arr2[j] == arr[i]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      arr2[index] = arr[i];
      index++;
    }
  }
  while (!isSorted) {
    isSorted = true;
    for (let j = 0; j < arr2.length-1; j++) {
      if (arr2[j] > arr2[j + 1]) {
        swap = arr2[j];
        arr2[j] = arr2[j + 1];
        arr2[j + 1] = swap;
        isSorted = false;
      }
    }
  }
} else {
}
return arr2[arr2.length - 1];
