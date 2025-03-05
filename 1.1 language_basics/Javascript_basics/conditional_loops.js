let salary = 1500;

// use in conditions to check <, >, <=, >=, ==, ===, !=, !==, ||, &&
// if condition
if ( salary > 1000 ) {
    salary += 2000;
    console.log(salary);
}

// if else condition
if( salary > 1000 ){
    salary = salary+2000;
    // salary += 2000;
    console.log(salary);
}else{
    salary = salary+1000;
    // salary += 1000;
    console.log(salary);
}

// nested if else condition
if(salary > 1000){
    salary += 2000;
}else if(salary === 1000){
    salary += 500;
}else{
    salary += 1000;
}

// switch case
let month = 5;
switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;
    case 3:
        console.log("April")
        break;

    default:
        console.log("default case matched");
        break;
}

/*
falsy values
false,0,-0,BigInt,0n,"",null,undefined,NaN
*/

/*
truthy values
"0","false"," ",[],{},function(){}
*/

/*
how to check value is array
*/
let arr = 5;
if(arr.length === 0){
    console.log(arr.length+" array is empty");
}else{
    console.log("not an array");
}

// how to check value is object
let emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}else{
    console.log("Object length is "+Object.keys(emptyObj).length);
}

//Nullish Coalescing operator (??): null undefined
let val1;
let val2;
let val3;
val1 = 5 ?? 10
val2 = null ?? 10;
val3 = null ?? 10 ?? 20
console.log(val1); //5
console.log(val2); //10
console.log(val3); //10

/*
    sometimes when we call values from database, we dont get the response directly instead we got 2 values
    we can get null or undefined or no response, in that case code structure can break so thats why this is 
    used, if value is null then assign null, if value is undefined then assign undefined, if any value is comes
    then assign that value.
*/

//terniary operator

const icetea = 100

// condition?true:false
icetea <= 80 ? console.log("less then 80") : console.log("more than 80");
