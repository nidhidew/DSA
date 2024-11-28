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