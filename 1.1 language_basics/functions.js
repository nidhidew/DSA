// pass by values
function modifyValue(num){
    num = num + 10;
    console.log(num)
}

let myNum = 10;
modifyValue(myNum);

//pass by reference
function modifyRefernece(obj){
    obj.name = "Alice";
    console.log(obj);
}
let myObj = {name: "Nidhi"}
modifyRefernece(myObj)

//pass by reference with arrays
function modifyArray(arr){
    arr.push(4);
    console.log(arr)
}
let MyArray = [1,2,3]
modifyArray(MyArray)