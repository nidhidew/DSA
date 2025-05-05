let i;

// CREATION AND INITIALIZATION
let arr = []; //EMPTY ARRAY
let arr2 = new Array(5); //ARRAY WITH SIZE OF 5
let arr3 = [1, 2, 3]; //ARRAY WITH INTIAL VALUES

// ACCESSING ELEMENTS
arr[i]; //ACCESS ELEMENT AT INDEX i

// UPDATING ELEMENTS
arr[i] = 10; //UPDATE ELEMENT AT INDEX i

// LENGTH
arr.length; //GET LENGTH OF ARRAY

// ADDING / REMOVING ELEMENTS
// arr3[arr3.length] = 4; // ADD ELEMENT IN THE END

// --arr3.length // REMOVE ELEMENT FROM THE END

/*
 TO ADD ELEMENT TO THE BEGINNING :
 * SHIFT ALL EXISTING ELEMENTS TO THE RIGHT BY ONE POSITION
 * INSERT NEW ELEMENT AT INDEX 0 
*/
for (let i = 0; i <= arr3.length; i++) {
  arr3[arr3.length - i] = arr3[arr3.length - i - 1]; //shifting elements to the right
}
arr3[0] = 4; //insert the new element at index 0
// console.log(arr3);

/**
 REMOVE ELEMENT FROM THE BEGINNING :
 * SHIFT ALL ELEMENTS TO THE LEFT BY ONE POSITION
 * DECREASE THE ARRAY SIZE BY 1 TO REMOVE LAST ELEMENT
*/

for (let i = 0; i < arr3.length; i++) {
  arr3[i] = arr3[i + 1];
}
--arr3.length;
// console.log(arr3);

// GET INDEX OF FIRST OCCURRENCE OF 3 || GET INDEX OF LAST OCCURRENCE OF 3 ||CHECK IF ELEMENT EXISTS IN ARRAY
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] == 3) {
    // console.log(i)
  }
}

// CREATE A NEW ARRAY FROM INDEX 1 TO 2(MODIFIES COPIED ARRAY (slice))
let newArr = [];
let arr4 = [1, 2, 3, 4, 5, 6];
let n1 = 1;
let n2 = 2;
let j = 0;
for (let i = n1; i < n2; i++) {
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
let arr5 = [1, 2, 3, 4, 5, 6];

let rmvElement = [];
let rmvIndex = 0;

let items = [];
let start = 1;
let deleteCount = 2;

for (let i = start; i < start + deleteCount && i > arr5.length; i++) {
  rmvElement[rmvIndex] = arr5[i];
  rmvIndex++;
}

for (let i = start + deleteCount; i < arr5.length; i++) {
  arr5[i - deleteCount] = arr5[i];
}

arr5.length = arr5.length - deleteCount;

for (let i = arr5.length - 1; i >= start; i--) {
  arr5[i + items.length] = arr5[i];
}
for (let i = 0; i < items.length; i++) {
  arr5[start + i] = items[i];
}
// console.log(arr5);
// return rmvElement;

// SORT ARRAY
let nums = [1, 4, 5, 3, 2];
let swap = 0;
let isSorted = false;

while (!isSorted) { // Run the loop until no swaps are made
    isSorted = true;
    for (let i = 0; i < nums.length - 1; i++) { // Fix loop condition
        if (nums[i] > nums[i + 1]) {
            swap = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = swap;
            isSorted = false;
        }
    }
}

// console.log(nums); 

// REVERSE ARRAY
let array = [1, 2, 3, 4, 5];
let start2 = 0;
let end2 = array.length - 1;

while (start2 < end2) {
    let temp = array[start2];
    array[start2] = array[end2];
    array[end2] = temp;
    start2++;
    end2--;
}

// console.log(array); 

// CONCAT
let arrCon = [1, 2, 3];
let arrCat = [4, 5, 6];
let result = [];
let index = 0;
// Copy arrCon into result
for (let i = 0; i < arrCon.length; i++) {
    result[index] = arrCon[i];
    index++;
}
// Copy arrCat into result
for (let i = 0; i < arrCat.length; i++) {
    result[index] = arrCat[i];
    index++;
}
console.log(result); 

// REMOVE DUPLICATES
/*algorithm

1. Create an empty array uniqueArr.
2. Use a counter index to track the position in uniqueArr.
3. Loop through arr and check if each element already exists in uniqueArr:
  * If it doesn’t exist, add it to uniqueArr.
4. Return uniqueArr.
*/
let arrRmv = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];
let index2 = 0;
// Loop through arrRmv
for (let i = 0; i < arrRmv.length; i++) {
    let exists = false;
    // Check if arrRmv[i] already exists in uniqueArr
    for (let j = 0; j < index2; j++) {
        if (uniqueArr[j] === arrRmv[i]) {
            exists = true;
            break;
        }
    }
    // If arr[i] is unique, add it to uniqueArr
    if (!exists) {
        uniqueArr[index2] = arrRmv[i];
        index2++;
    }
}
console.log(uniqueArr); 