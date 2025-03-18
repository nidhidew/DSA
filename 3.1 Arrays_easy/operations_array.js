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

// CREATE A NEW ARRAY FROM INDEX 1 TO 2(MODIFIES COPIED ARRAY (slice))
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

//REMOVE 2 ELEMENTS STARTING FROM INDEX 1(MODIFIES ORIGINAL ARRAY (splice))
/*
 **Algorithm to Implement `splice()` Using Loop and Condition:**  

1. **Input:** Start index `start`, number of elements to remove `deleteCount`, and optional elements to insert.  
2. **Step 1:** Create an empty array to store removed elements.  
3. **Step 2:** Loop through the array:  
   - If index is within the `start` to `start + deleteCount` range → push the element into the removed array.  
   - If inserting new elements → shift elements to make space.  
4. **Step 3:** Remove elements by shifting the remaining elements to the left.  
5. **Step 4:** Insert new elements at the `start` index if any.  
6. **Step 5:** Return the array of removed elements.  
7. **Done!** 😎  
*/
let arr5 = [1,2,3,4,5,6]

let rmvElement = []
let rmvIndex = 0;

let items = []
let start = 1
let deleteCount = 2

for(let i=start; i<start+deleteCount && i>arr5.length; i++){
    rmvElement[rmvIndex] = arr5[i]
    rmvIndex++;
}

for(let i=start+deleteCount;i<arr5.length;i++){
    arr5[i-deleteCount] = arr5[i];
}

arr5.length = arr5.length-deleteCount;

for(let i=arr5.length-1;i>=start;i--){
    arr5[i+items.length] = arr5[i];
}
for(let i=0;i<items.length;i++){
    arr5[start+i] = items[i];
}
console.log(arr5);
// return rmvElement;

// SORT ARRAY