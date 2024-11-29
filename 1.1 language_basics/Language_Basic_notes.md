# Variables

1. variable is a named storage for data.
2. to create a variable use, let,const or var (anyone). let,const and var have there own qualities. according to requirement use any one of them. 
  `let message = "hello"`
3. variables cant be declared twice.
4. let and const are block scoped variable type and var is global scope.
5. let and var variable value can be changed or modified. const variable value is constant, immutable.

# DataTypes

1. type of data or value is stored in variable is always of a certain type.
2. ## Number:- 
    `let message = 123;`
3. ## Float:-
    `let num = 1.25;`
4. ## Infinity:-
    `let num = Infinity;`
5. ## BigInt:-
    `let num = 7896541236547896541;`
6. ## String:-
    ```
    let str = "hi";
    let str2 = "hi, how are you;"
    let input = `${str}`;
    ```
7. ## boolean:-
    ```
    let bool = true;
    ```
8. ## null:-
    `let age = null`
9. ## undefined:-
    `let age = undefined`
10. ## Symbol:-
   `const d6 = Symbol("key")`
11. ## objects:-
    ```
    let user = {
        name: "john",
        age: 30,
    }
    console.log(user.name); //to access the name value.
    ```
    name and age is a property and "john" and 30 are values of these property.

    ```
    let user =  new Object(); // "object constructor" syntax
    let user = {}; // "object literal" syntax
    ```
12. ## array:-
    ```
    let user = [
        name: "john",
        age: 30,
    ]
    console.log(user[0].name); //to access the name value.
    ```
    name and age is a property and "john" and 30 are values of these property.

    ```
    let user =  new Array(); // "array constructor" syntax
    let user = []; // "array literal" syntax
    ```
13. ## function:-
    ```
    function greet(){
        //   ......
    }
    ```
14. ## date:-
    `let today = new Date();`
15. ## regular expression
    `let regex = /abc457%$#/;`

# User input output 

1. handle user input output in different ways, depending on the environment.
2. ## Browser Environment
* use prompt() to get input from the user.
```
let name = prompt("enter your name:");
console.log("hello, "+name+"!")
```
* use `console.log()` to output data to the browser console.
* use `alert()` to display a popup message.
* manipulate the DOM using `document` methods to show output on the page.

```
console.log("this is a console.log"); //output using console
alert("this is a alert"); //output using alert
document.body.innerHTML = "hello, world!"; //output on the webpage
```
3. ## NodeJS Environment
* ## Input:-
    use the readline module to get input from the command line.
    ```
    const readline = require("readline")
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r1.question("Enter your name: ", (name) => {
        console.log(`hello, ${name}!`);
        r1.close();
    });
    ```
* ## Output:-
    use console.log() to display out on the console.
    ```
    console.log("this is an output in nodeJS");
    ```
4. ## HTML forms for input and output
* ## Input:-
    you can create an HTML form to get user input.
    ```
    <input type="text" id="nameInput" placeholder="enter your name" />
    <button onclick="greet()">Submit</button>
    ```
* ## Output:-
    show the output dynamically on the webpage.
    ```
    function greet(){
        let name =  document.getElementById("nameInput").value;
        document.getElementById("output").innerText = `Hello, ${name}!`;
    }
    ```
* combine javascript with html to create interactive input and output on web pages.

# Type Conversions
* String conversion happens when we need the string form of a value
* call the String(value) function to convert a value to a string:
```
let value = true;
console.log(typeof value); // boolean
value = String(value);
console.log(typeof value); // string
```
* Numeric conversion in mathematical functions and expressions happens automatically.
* use Number(value) function to explicitly convert a value to a number:
```
let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(typeof num);
```
* explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.
* if the string is not a valid number, the result of such a conversion is NaN.

# Boolean conversion
* it happens in logical operations but can also be performed explicitly with a call to Boolean(value).
* the conversion rule:
- values that are intuitively "empty", like 0 an empty string, null, undefined and NaN become false.
- Other values become true.

```
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false

console.log(Boolean("hello"));//true
console.log(Boolean("")); //false
```

# Comparisons
* greater/less than: a > b,a < b.
* greater/less than or equals: a >= b, a <= b
* Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means and assignment.
* Not Equals: a != b

## Boolean is the result
* true - means "correct"
* false - means "wrong"

```
console.log(2 > 1); //true
console.log(2 == 1); //false
console.log(2 != 1); //true
```

## String comparison
```
console.log( 'Z' > 'A' );
console.log( 'Glow' > 'Glee' );
console.log( 'Bee' > 'Be' );
```

* to see whether a string is greater than another,JS uses the so-called "dictionary" or "lexicographical" order.
* 