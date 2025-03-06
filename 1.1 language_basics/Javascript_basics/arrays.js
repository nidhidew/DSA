// const arr = [9,4,5,6,8];
// const heros = ["ironman","superman","batman"];
// const arr2 = new Array(1,2,3,4,5,6);
// console.log(arr[1]);

// //array methods
// arr.push(6)//to add elements in array
// console.log(arr);

// arr.pop()
// console.log(arr);

// arr.unshift(9);
// console.log(arr);

// arr.shift();
// console.log(arr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

// const arr3 = arr.join();
// console.log(arr3," convert into ",typeof arr3);

// console.log(arr);
// const newArr1 = arr.slice(1,3)
// console.log(newArr1);
// // console.log("B ",arr)

// const newArr2 = arr.splice(1,3)
// console.log(newArr2);

// console.log(arr);


let arr = [10,20,30,40,50,60];

console.log("for loop ")
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);    
}

console.log("for of ");
for(let value of arr){
    console.log(value);
}

console.log("for in ");
for(let index in arr){
    console.log(`Index: ${index}, Value: ${arr[index]}`);
}

console.log("forEach")
arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});

let newArr = arr.map(value => value);
console.log("map ",newArr);
