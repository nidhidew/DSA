// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
let digits = [9,9,9]
let num = 0;
let n = digits.length; 
console.log(digits,digits.length)
if(n > 16){
    digits[n-1] = digits[n-1]+1;
    for(let j=n;j>=0;j--){
        if(digits[j] == 10){
            digits[j] = 0;
            digits[j-1] = digits[j-1]+1;
        }
        if(digits[0] == 10){
            digits[0] = 0;
            digits.unshift(1);
        }
    }
    
}else if(n < 16){
    for(let i=0;i<n;i++){
        num = (num*10)+digits[i];
    }
    num = num+1;
    digits = num.toString().split('').map(Number);
    for(let j=n;j>=0;j--){
        if(digits[j] == 10){
            digits[j] = 0;
            digits[j-1] = digits[j-1]+1;
        }
        if(digits[0] == 10){
            digits[0] = 0;
            digits.unshift(1);
        }
    }
    
}

console.log(digits,digits.length)