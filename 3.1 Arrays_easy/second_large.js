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