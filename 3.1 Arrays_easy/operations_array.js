let i;

// CREATION AND INITIALIZATION
let arr = [] //EMPTY ARRAY
let arr2 = new Array(5) //ARRAY WITH SIZE OF 5
let arr3 = [1,2,3] //ARRAY WITH INTIAL VALUES

// ACCESSING ELEMENTS
arr[i] //ACCESS ELEMENT AT INDEX i

// UPDATING ELEMENTS
arr[i] = 10; //UPDATE ELEMENT AT INDEX i

// LENGTH
arr.length //GET LENGTH OF ARRAY

// ADDING / REMOVING ELEMENTS
// arr3[arr3.length] = 4; // ADD ELEMENT IN THE END

// --arr3.length // REMOVE ELEMENT FROM THE END

/*
 TO ADD ELEMENT TO THE BEGINNING :
 * SHIFT ALL EXISTING ELEMENTS TO THE RIGHT BY ONE POSITION
 * INSERT NEW ELEMENT AT INDEX 0 
*/
for(let i=0;i<=arr3.length;i++){
    arr3[arr3.length-i]=arr3[arr3.length-i-1] //shifting elements to the right
}
arr3[0] = 4 //insert the new element at index 0
// console.log(arr3);

/**
 REMOVE ELEMENT FROM THE BEGINNING :
 * SHIFT ALL ELEMENTS TO THE LEFT BY ONE POSITION
 * DECREASE THE ARRAY SIZE BY 1 TO REMOVE LAST ELEMENT
*/

for(let i=0;i<arr3.length;i++){
    arr3[i] = arr3[i+1]
}
--arr3.length;
// console.log(arr3);

// GET INDEX OF FIRST OCCURRENCE OF 3 || GET INDEX OF LAST OCCURRENCE OF 3 ||CHECK IF ELEMENT EXISTS IN ARRAY
for(let i=0;i<arr3.length;i++){
    if(arr3[i] == 3){
        // console.log(i)
    }
}

// CREATE A NEW ARRAY FROM INDEX 1 TO 2(MODIFIES COPIED ARRAY)
let newArr = [];
let arr4 = [1,2,3,4,5,6];
let n1 = 1
let n2 = 2
let j=0;
for(let i=n1;i<n2;i++){
    newArr[j] = arr4[i];
    j++;
}
// console.log(newArr);

//REMOVE 2 ELEMENTS STARTING FROM INDEX 1(MODIFIES ORIGINAL ARRAY)
let arr5 = [1,2,3,4,5,6]
let r1 = 1;
let r2 = 2;

for(let i=r1;i<arr5.length;i++){
    arr5[i] = arr5[i+r2];
}
for(let j=0;j<r2;j++){
    --arr5.length;
}
console.log(arr5);

// SORT ARRAY