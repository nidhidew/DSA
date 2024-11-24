//primitive datatype
const d1 = "abc" //string 8 bytes
const d2 = 123 //number 2 bytes
const d3 = true //boolean 4 bytes
const d4 = undefined //undefined 4 bytes
const d5 = null //null 4 bytes
const d6 = Symbol("key") //symbol unknown size
const d7 = 9874563214569874563214569874 //bigint size based on number of digits

//non-primitive datatype

//object
const person = {
    name: "abc",
    age: 22
}

//array
const num = [1,2,3]

//function
function greet(){
 //   ......
}

//date
const today = new Date()

//regular expression
const regexp = /abc/;