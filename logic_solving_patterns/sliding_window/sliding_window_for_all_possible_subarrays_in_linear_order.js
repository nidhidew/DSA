let arr = [10,20,30,40,50];
let windowarr = [];
let start = 0;
let end = 0;
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