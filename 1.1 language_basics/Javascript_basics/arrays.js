const arr = [9,4,5,6,8];
// const heros = ["ironman","superman","batman"];
// const arr2 = new Array(1,2,3,4,5,6);
// console.log(arr[1]);

// //array methods
// arr.push(6)//to add elements in array
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift(9); // add a element in the 0th index of an array
// console.log(arr);

// arr.shift(); // remove the 1st element of an array
// console.log(arr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

// const arr3 = arr.join();
// console.log(arr3," convert into ",typeof arr3);

// console.log(arr);
// const newArr1 = arr.slice(3) // print 1st index element to 2nd index  
// console.log(newArr1);
// // console.log("B ",arr)
 
// const newArr2 = arr.splice(1,3) // print 1st index element to 3rd index
// console.log(newArr2);
// console.log(arr);

// arr.slice(x).concat(arr.slice(0, x)); // this will slice/cut from the x index and concat/add in x index to of arr.
// arr.slice(-k).concat(arr.slice(0, -k));
/* array slicing
arr.slice(-k) → Takes the last k elements.
arr.slice(0, -k) → Takes the remaining elements from the beginning.
concat() → Joins the two slices to create a rotated array.
*/
/* modulo based indexing
let arr = [1, 2, 3, 4, 5];
let k = 2;
let n = arr.length;
let rotated = new Array(n);
for (let i = 0; i < n; i++) {
    let newIndex = (i + k) % n;
    rotated[newIndex] = arr[i];
}
console.log(rotated); // Output: [4, 5, 1, 2, 3]
*/
/*
(i + k) % n → Calculates the new index after rotation.
rotated[newIndex] = arr[i] → Places the element at the new index.
*/

// let arr = [10,20,30,40,50,60];

// console.log("for loop ")
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);    
// }

// console.log("for of ");
// for(let value of arr){
//     console.log(value);
// }

// console.log("for in ");
// for(let index in arr){
//     console.log(`Index: ${index}, Value: ${arr[index]}`);
// }

// console.log("forEach")
// arr.forEach((value, index) => {
//     console.log(`Index: ${index}, Value: ${value}`);
// });

// let newArr = arr.map(value => value);
// console.log("map ",newArr);

