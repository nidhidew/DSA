let arr = [10,20,30,40,50];
let windowarr = [];
let start = 0;
let end = 0;
// let j = 0;
// let i = 0;

// for(end = i;end < arr.length; end++){
//     windowarr[j] = arr.slice(start,end+start+1);
//     j++;
//     if(end == arr.length-1){
//         end = 0;
//         start++;
//     }else if(start == arr.length-1){
//         arr.length = 0;
//     }
// }
while(start<arr.length){
    if(end<arr.length){
        windowarr.push(arr.slice(start,end+1));
        end++;
    }else {
        start++;
        end = start;// reset end to start for next subarray range
    }
}

console.log(windowarr)