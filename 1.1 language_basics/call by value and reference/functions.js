let myNum = 10;
passByValue(myNum);
console.log("After - Pass By Value: ",myNum);

let myObj = {name: "Nidhi"}
passByReference(myObj);
console.log("After - Pass By Reference: ",myObj);

let myObj2 = {property: "apple"};
passByReference2(myObj2);
console.log("After - Pass By Reference(2): ",myObj2);

let MyArray = [1,2,3]
passByReferenceWithArray(MyArray);
console.log("After - Pass By Reference with Array: ",MyArray);



//pass by reference
function passByReference(obj){
    console.log("Before - Pass By Reference: ",obj);
    obj.name = "Alice";
}

//pass by reference with arrays
function passByReferenceWithArray(arr){
    console.log("Before - Pass By Reference with Array: ",arr);    
    arr.push(4);
}

// pass by values
function passByValue(num){
    console.log("Before - Pass By Value: ",num);    
    num = num + 10;
}

//pass by reference
function passByReference2(obj2){
    console.log("Before - Pass By Refrence(2): ",obj2)
    obj2 = {property: "grapes"};
    obj2.property = "lemon";
}
