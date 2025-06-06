/*First Negative Number in Every Window of Size K
Given an array and a window size k, print the first negative number in every window.
Example: arr = [12, -1, -7, 8, -15, 30, 16, 28], k = 3 → Output: [-1, -1, -7, -15, -15, 0]
*/

let arr = [5, 6, 7, -1, -2];
let k = 3;
let subarr = [];
let negarr = [];
for(let i=0;i<k;i++){
    subarr.push(arr[i]);
}
for(let i=0;i<subarr.length;i++){
    if(subarr[i] < 0){
        negarr.push(subarr[i]);
        break;
    }
    else if(i == subarr.length-1 || i == subarr.length){
        negarr.push(0)
    }
}
console.log(subarr);
console.log(negarr);
console.log();
for(let i=k;i<arr.length;i++){
    subarr.shift();
    subarr.push(arr[i]);
    console.log(subarr)
    let j = 0;
    if(subarr[j] < 0){
        negarr.push(subarr[j]);
    }else if(subarr[j] > 0){
        j++;
        if(subarr[j] < 0){
            negarr.push(subarr[j]);
            j++;
        }else{
            negarr.push(0);
        }
    }else if(j == subarr.length-1 || j == subarr.length){
        negarr.push(0)
    }
    console.log(negarr);
    console.log();
}
 console.log(negarr);

// optimized solution

let start=0;
let count=0;
let firstneg = [];
// let negarr = [];
for(let end=0;end<arr.length;end++){
    if(arr[end]<0){
        firstneg.push(arr[end])
    }
    
    if(end-start+1 === k ){
        if(firstneg.length > 0){
            negarr.push(firstneg[0])
        }else{
            negarr.push(0)
        }
        
        if(arr[start] === firstneg[0]){
            firstneg.shift();
        }
        start++;
        // end=start-1;
        // count++;
        // negarr.push(0);
    }
}
// count = 0
console.log(negarr)
