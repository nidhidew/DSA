# OOPS (Object- Oriented Programming) in Javascript
1. Objects
```
const person = {
    firstname: "ABC",
    lastname: "DEF",
    greet(){
        console.log(`Hello, ${this.firstname} ${this.lastname}`);
    }
};
person.greet(); //output: Hello, ABC DEF
```

2. Classes
```
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

const person1 = new Person("ABC");
person1.greet();// output: Hello, ABC
```

3. Principles of oop in Javascript:
* **Encapsulation** means <ins>bundling data(properties) and methods(functions) together within an object.</ins>
Use <ins>Private fields</ins> (introduced in ES2021) or <ins>clousres</ins> to restrict access to object properties.
```
class BankAccount { // defines class 
  #balance; // decalres Private field

  constructor(balance) { //initializing an object
    this.#balance = balance; //assigns the given balance value to the private field #balance 
  }

  deposit(amount) { //create a method to add money to the account
    this.#balance += amount; //increase the balance by the given amount
  }

  getBalance() { //create a method that returns the current balance
    return this.#balance;
  }
}

const account = new BankAccount(100); // create a new account with initial balance of 100
account.deposit(50); //add or deposit amount 50 in the account
console.log(account.getBalance()); // Output: 150 (returns the current balance)
// console.log(account.#balance); // Error: Private field (since #balance in this line is private)
```
**Steps**:
1. BankAccount is a blueprint for creating bank account objects
2. #balance is a private variable, accessible only inside the class
3. initializes the account with a given balance
4. deposit(amount) increases balance, getBalance() returns balance.
5. the private field #balance prevents direct modification from outside

* **Inhertance** <ins>allows 1 class(child) to acquire propeties and methods from another class(parent)</ins>
```
class Animal { //defining the parent class (Animal), acts as a blueprint for creating animals.
  constructor(name) { //constructor initializes an object with a name property
    this.name = name; //stores the given name in the object
  }

  speak() { //create method inside the Animal class
    console.log(`${this.name} makes a noise.`); // will print a generic messsage with actual name of the animal which is stores in constructor
  }
}

class Dog extends Animal { //Dog inherits from the Animal class using extends which means Dog gets all properties and methods from Animal, including name and speak().
  speak() { // override the speak() method from Animal
    console.log(`${this.name} barks.`); // Instead of saying "makes a noise.", it now customizes the message to "barks.".

  }
}

const dog = new Dog("Rover"); //create an object dog from the Dog class
dog.speak(); // Output: Rover barks. (Dog overrides the speak() method so it does not call the Animal method)
```
**Steps**
1. Dog class inherits from Animal
2. new Dog("Rover") creates an object and calls the Animal constructor to set this.name = "Rover"
3. dog.speaks() is called
4. Since Dog overrides speak(), the custom method `console.log(${this.name} barks);` runs
5. output: Rover barks
6. Note: if speak() method is not overridden then output: Rover makes a noise

* **Polymorphism** means <ins>allows a child class to access and use properties and methods from its parent class through inheritance. Additionally, the child class can override parent methods to provide its specific implementation.</ins>
```
class Shape { // create base or super class
  area() { // has a method which simply logs "Area not defined"
    console.log("Area not defined");
  }
}

class Circle extends Shape { // Circle inherits from Shape
  constructor(radius) { 
    super(); // Calls the constructor of Shape (super() is required in a subclass even though parent class has no constructor.
    this.radius = radius; // stores the radius in the circle object.
  }

  area() { // overrides the area() method from Shape
    return Math.PI * this.radius ** 2; //instead of printing "Area not defined", it now calculates the area of a circle
  }
}

const circle = new Circle(5); // creates an object cirle with radius = 5
// circle.area() calls the overridden area() method in Circle
console.log(circle.area()); // Output: 78.53981633974483
```
**Steps:**
1. Circle inherits from Shape
2. new Cirlce(5) creates a Circle object with radius = 5
3. super(); class the Shape constructor (even thought its empty)
4. circle.area is called
5. Since Circle overrides area(),  it calculates
6. will give output: console.log(circle.area())
7. Note: if area() method is not overridden then output: Area not defined

* **Abstraction** <ins>hides implementation details and shows only essential features.</ins> JS dosent have built-in supprot for abstract classes but can be simulated.
```
class AbstractVehicle { //abstract class, meaning it cannot be directly instantiated
  constructor() {
    //preventing dorect instantiation
    if (new.target === AbstractVehicle) { //new.target referes to the constructor that was directly called using new
      throw new Error("Cannot instantiate abstract class."); //if an attempt is made to create an instance of AbstractVehicle
    }
  }

  move() { // move() method is ment to be overridden by subclass
    throw new Error("Method 'move()' must be implemented.");
  } // this ensures that any subclass must define its own movement behavior
}

class Car extends AbstractVehicle { // Car inherits from AbstractVehicle using extends 
  move() {
    console.log("Car is moving"); // provides a specific implementation of the move() method
  }
} // now Car can be instantiated without errors

const car = new Car(); //creating an Object of Car
// Since Car provides an implementation for move(), calling car.move() and prints the output
car.move(); // Output: Car is moving 

// const vehicle = new AbstractVehicle(); // Error: Cannot instantiate abstract class.
// above line will throw an error because AbstractVehicle is not meant to be instantiated directly.
```
**Steps:**
1. AbstractVehicle acts as a base class that should not be instantiated.
2. new.target Prevents direct instantiation of AbstactVehicle.
3. the move() method must be implemented in subclasses.
4. Car and other vehicle classes inherit from AbstractVehicle.
5. Different vehicles can have their own move() behavior.

6. Prototypes and inheritance: objects inherit from other objects via the prototype chain
```
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, ${this.name}!`);
};

const person = new Person("Nidhi");
person.greet(); // Output: Hello, Nidhi!
```

5. Static Methods: belong to class, not the instance.
```
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3)); // Output: 8
```

6. Getters and Setters: use get and set to control how propeties are accessed or modified.
```
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const person = new Person("ABC");
console.log(person.name); // Output: ABC
```

7. Mixins: allow multiple inheritance by copying methods into a class.
```
const CanEat = {
  eat() {
    console.log("Eating...");
  }
};

const CanWalk = {
  walk() {
    console.log("Walking...");
  }
};

class Person {}
Object.assign(Person.prototype, CanEat, CanWalk);

const person = new Person();
person.eat(); // Output: Eating...
person.walk(); // Output: Walking...
```

# Mathematical operations with number and number as strings

* js implicitly converts the string to a number if its a valid numeric string, for most arithmetic operations.
1. **Addition**
```
console.log(10 + "5"); // "105" (string concatenation)
console.log("10" + 5); // "105" (string concatenation)
console.log(10 + +"5"); // 15 (numeric addition, the unary + converts "5" to 5)
```
2. **Subtraction**
```
console.log(10 - "5"); // 5
console.log("10" - 5); // 5 (JS tries to coerce strings into numbers if possible)
console.log(10 - "abc"); // NaN 
```

3. **Multiplication**
```
console.log(10 * "5"); // 50 (numeric strings are coerced)
console.log("10" * 5); // 50 if sring is numeric, it is coerced
console.log(10 * "abc"); // NaN
```

4. **Division**
```
console.log(10 / "5"); // 2 (numeric strings are coerced)
console.log("10" / 5); // 2 (numeric strings are coerced)
console.log(10 / "abc"); // NaN
```

5. **Modulus**
```
console.log(10 % "3"); // 1 (numeric strings are coerced)
console.log("10" % 3); // 1 (numeric strings are coerced)
console.log(10 % "abc"); // NaN
```

6. **Exponentition**
```
console.log(10 ** "2"); // 100 (numeric strings are coerced)
console.log("2" ** 3); // 8 (numeric strings are coerced)
console.log(10 ** "abc"); // NaN
```

7. **Unary Operators**
```
console.log(+"5"); // 5 (numeric strings are coerced)
console.log(-"5"); // -5 (numeric strings are coerced)
console.log(+"abc"); // NaN
console.log(-"abc"); // NaN
```

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
2. **Browser Environment**
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
3. **NodeJS Environment**
* **Input**:-
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
* **Output**:-
    use console.log() to display out on the console.
    ```
    console.log("this is an output in nodeJS");
    ```
4. **HTML forms for input and output**
* **Input**:-
    you can create an HTML form to get user input.
    ```
    <input type="text" id="nameInput" placeholder="enter your name" />
    <button onclick="greet()">Submit</button>
    ```
* **Output**:-
    show the output dynamically on the webpage.
    ```
    function greet(){
        let name =  document.getElementById("nameInput").value;
        document.getElementById("output").innerText = `Hello, ${name}!`;
    }
    ```
* combine javascript with html to create interactive input and output on web pages.

# What are Arrays and Strings in JavaScript?

**Arrays in JavaScript**
1. **Definition**:
   - An **array** is a data structure used to store multiple values in a single variable.
   - Values (called elements) are stored in a specific order and can be accessed using an **index**.

2. **Key Features**:
   - Can hold different data types (numbers, strings, objects, etc.).
   - The first element is at index `0`.

3. **Example**:
   ```
   const arr = [10, 20, 30];
   console.log(arr[0]); // Output: 10
   ```

4. **DSA Perspective**:
   - Arrays are a **sequential data structure**.
   - Used for problems like searching, sorting, and implementing other data structures like stacks and queues.

5. **Common Operations**:
   - Access: `arr[1]` (O(1))
   - Insertion at the end: `arr.push(40)` (O(1))
   - Deletion: `arr.pop()` (O(1))
   - Searching: Linear Search (O(n)) or Binary Search (O(log n), for sorted arrays).

**Strings in JavaScript**
1. **Definition**:
   - A **string** is a sequence of characters used to represent text.

2. **Key Features**:
   - Strings are **immutable** (cannot be changed once created).
   - Individual characters can be accessed like an array.

3. **Example**:
   ```
   const str = "hello";
   console.log(str[0]); // Output: h
   ```

4. **DSA Perspective**:
   - Strings are a special case of arrays where each element is a character.
   - Used in problems like reversing a string, finding substrings, or pattern matching (e.g., `KMP Algorithm`).

5. **Common Operations**:
   - Access: `str[2]` (O(1))
   - Concatenation: `str1 + str2` (O(n))
   - Searching for substrings: `str.includes('el')` (O(n))

**DSA Example Problem**
- **Array**: Find the maximum number in an array.
  ```
  const arr = [3, 5, 1, 9];
  console.log(Math.max(...arr)); // Output: 9
  ```

- **String**: Check if a string is a palindrome.
  ```
  const str = "madam";
  console.log(str === str.split('').reverse().join('')); // Output: true
  ``` 

Arrays and strings are fundamental in both **JavaScript programming** and **data structure problems**, forming the basis of many algorithms.

# Why let and const were came in picture?
1. **Issues with var**
**a. Function Scope Instead of Block Scope**
Variables declared with var are scoped to the global scope, not the block in which they are defined.
Example:
```
if (true) {
  var x = 10; // Function-scoped
}

console.log(x); // 10 (Accessible outside the block)

function f1(){
    var a =10

}
f1()
console.log(a); //error: a is not defined
```
This behavior can lead to unintended consequences, especially in loops and conditionals.
**b. Hoisting**
var declarations are hoisted (moved to the top of their scope), but their value is not initialized until the line of code is executed. Accessing the variable before its declaration gives undefined.
Example:
```
console.log(x); // undefined
var x = 10;
```
This can cause confusion and bugs if developers are unaware of the hoisting behavior.
**c. No block-level scope**
With var, loops and other block-level constructs do not create a new scope, leading to unexpected behavior in closures.
Example:
```
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 (All callbacks share the same `i`)
```
**d. Accidental global variables**
Forgetting to use var creates an implicit global variable, which can be difficult to track in large codebases.
Example:
```
function foo() {
  x = 10; // No `var` declaration
}
foo();
console.log(x); // 10 (Accidentally global variable)
```

2. **Advantages of let**
**a. Block-Level Scope**
Variables declared with let are scoped to the block they are declared in.
Example:
```
if (true) {
  let y = 20;
}
console.log(y); // Error: y is not defined
```
**b. No Hoisting Pitfall**
Although let is hoisted, it is in the temporal dead zone (TDZ) until its declaration is encountered. Accessing it before declaration results in an error.
Example:
```
console.log(y); // Error: Cannot access 'y' before initialization
let y = 10;
```
**c. Better Loop Behavior**
A new let variable is created for each iteration of a loop, preserving the correct value in closures.
Example:
```
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0, 1, 2
```
3. **Advantages of const**
**a. Immutable Variable Binding**
const is used to declare variables that cannot be reassigned after their initial assignment. This ensures better code stability and prevents accidental reassignment.
Example:
```
const z = 50;
z = 60; // Error: Assignment to constant variable
```
**b. Block-Level Scope**
Like let, const is block-scoped.
Example:
```
if (true) {
  const a = 10;
}
console.log(a); // Error: a is not defined
```
**c. Reference Type Mutability**
For objects and arrays, const ensures the reference cannot be reassigned, but the contents can still be mutated.
Example:
```
const obj = { name: "Nidhi" };
obj.name = "Dewangan"; // Allowed
console.log(obj); // { name: "Dewangan" }

obj = {}; // Error: Assignment to constant variable
```

# Type Conversions
* String conversion happens when we need the string form of a value
* call the **String(value)** function to convert a value to a string:
```
let value = true;
console.log(typeof value); // boolean
value = String(value);
console.log(typeof value); // string
```
* Numeric conversion in mathematical functions and expressions happens automatically.
* use **Number(value)** function to explicitly convert a value to a number:
```
let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(typeof num);
```
* explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.
* if the string is not a valid number, the result of such a conversion is NaN.

# Boolean conversion
* it happens in logical operations but can also be performed explicitly with a call to **Boolean(value)**.
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

* to see whether a string is greater than another,JS uses the so-called "dictionary" or "lexicographical" order. In order words, strings are compared letter-by-letter.
```
console.log('Z' > 'A'); //true
console.log('Glow' > 'Glee'); //true
console.log('Bee' > 'Be'); //true
```
* The algorithm to compare two strings is simple:

1. Compare the first character of both strings.
2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

1. G is the same as G.
2. l is the same as l.
3. o is greater than e. Stop here. The first string is greater.

## Comparison of different types
```
console.log('2' > 1); //true, string '2' becomes a number 2
console.log('01' == 1); //true, string '01' becomes a number 1
console.log(true == 1); //true
console.log(false == 0); //true
```

## Strict equality
```
console.log(0 == false); //true
console.log('' == false); //true
```
this happens because operands of different types are converted to numbers by the equality operator ==. an empty string just like false becomes a 0.
* a strict equality operator === checks the qulaity without typw conversion.
```
console.log(0 === false); //false, because the types are different
```
* strict non-equality
` console.log( 0 !== 1); //true `

## Comparison with num and undefined
```
console.log(null === undefined) //false
console.log(null == undefined) //true
```
* null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

## Strange result: null vs 0
```
console.log( null > 0 ); //false
console.log( null == 0 ); //false
console.log( null >= 0 ); //true
```
* Mathematically, that’s strange. The last result states that “null is greater than or equal to zero”, so in one of the comparisons above it must be true, but they are 
both false.

* The reason is that an **equality check ==** and **comparisons > < >= <=** work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is
 true and (1) null > 0 is false.

* On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. 
That’s why (2) null == 0 is false.

## incomparable undefined
```
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false
```

* Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
* The equality check (3) returns false because undefined only equals null, undefined, and no other value.

## Unicode in JS

1. Unicode Basics
* **Unicode Characters**: Each character is represented by a unique code point, written as U+ followed by a hexadecimal number (e.g., U+0041 for "A").
* **Code Units**: JavaScript strings are stored as sequences of 16-bit code units (UTF-16 encoding). A single Unicode character might require one or two code units.
* **Basic Multilingual Plane (BMP)**: For code points from U+0000 to U+FFFF, use \uXXXX.
`console.log('\u0041'); // A`
* **Supplementary Plane**: For code points above U+FFFF, use \u{XXXXX} (introduced in ES6).
`console.log('\u{1F600}'); // 😀`
* **Accessing Characters**
Use charAt() or bracket notation, but they may not correctly handle characters outside the BMP.
```
const str = '😀A';
console.log(str[0]);      // Incorrectly shows part of the surrogate pair
console.log([...str][0]); // Correctly shows 😀 
```
* **Length and Surrogate Pairs**
string.length returns the number of UTF-16 code units, not the number of Unicode characters.
```
const str = '😀';
console.log(str.length); // 2 
```
* **Correct Iteration**
Use for...of to handle multi-code-unit characters:
``` 
  for (const char of '😀A') {
  console.log(char); // 😀, A}
```
* **unicode regular expressions**
```
const regex = /./u;
console.log(regex.test('😀')); // true
```
Use the Unicode flag u to work with Unicode characters properly.

Introduced in ES2018, the \p{} syntax allows matching Unicode character properties:
```
const regex = /\p{Emoji}/u;
console.log(regex.test('😀')); // true
```

* **Unicode Normalization**
- unicode allows multiple ways to represent the dame character (e.g., é as U+00E9 or U+0065 U+0301).
- use normalize() to standardize strings:
```
const str = '\u0065\u0301'; // e + accent
console.log(str.normalize() === '\u00E9'); // true
```
- it is required to ensure that Unicode text is represented in a consistent format. Many characters in unicode can be represented in multiple ways, which can cause issues in text comaprison,seraching,sorting and processing.

* **Converting Code Points**
```
console.log('😀'.codePointAt(0).toString(16)); // 1f600
console.log(String.fromCodePoint(0x1F600)); // 😀
```
- 1st line is to retrieve the Unicode code point
- 2nd line is to convert code point to a character

* **Unicode Encoding**
- **UTF-16 vs UTF-8**:- js uses UTF-16 internally but UTF-8 is commonly used for external data( like JSON,APIs)
- **Enocde/Decode with `TextEncode` and `TextDecoder`**:- introduced in modern js for converting between text and binary data.
```
const encoder = new TextEncoder();
const uint8Array = encoder.encode('😀');
console.log(uint8Array); // Uint8Array with UTF-8 bytes

const decoder = new TextDecoder();
console.log(decoder.decode(uint8Array)); // 😀

```
## Why use Unicode instead of ASCII? 

1. **Broader Character Support**:
   - ASCII can only represent **128 characters**, which is enough for English but not for other languages.
   - Unicode supports **many languages**, symbols, emojis, and special characters from around the world.

2. **Global Compatibility**:
   - Unicode allows you to write and display text in **multiple languages** in the same document or program.
   - ASCII is limited to just basic English characters.

3. **Modern Use**:
   - Today’s software and the internet require a way to handle a variety of symbols (e.g., emojis 😊, currency symbols €, etc.).
   - Unicode makes this possible.

---

### Example:
- ASCII: Can show `A`, `B`, `C`, `1`, `2`, `3`, but **not** `你好` (Chinese) or `😊`.
- Unicode: Can handle all of these: `A`, `1`, `你好`, `😊`, `₹`.

In short: **Unicode is better for a multilingual, globalized world.**

# Pass By Value
```
let myNum = 10;
passByValue(myNum);
console.log("After - Pass By Value: ",myNum);
function passByValue(num){
    console.log("Before - Pass By Value: ",num);    
    num = num + 10;
}
```
* myNum variable has value 10 which is passed to console.log to print the myNum value and passByValue function to use myNum value.
* myNum value is printed inside and outside the function block, and both are same.
* in Pass By Value primitive datatype (number,string etc.) value, pass copy of that value in function. So if value inside function is modified it wont be affecting original value.

# Pass By Reference
```
let myObj = {name: "Nidhi"}
passByReference(myObj);
console.log("After - Pass By Reference: ",myObj);
function passByReference(obj){
    console.log("Before - Pass By Reference: ",obj);
    obj.name = "Alice";
}
```
* myObj variable is a object with key and value which has passed to console.log to print the myObj value and passByReference function to use myObj value.
* myObj value is printed inside and outside the function block and both are different.
* in Pass By Reference non-primitive datatype value passed to function where it will pass the copy of variable address. so if value inside the function is modified it will change the original value too because modification is happend while considering address of the variable(original variable and value).

```
let myObj2 = {property: "apple"};
passByReference2(myObj2);
console.log("After - Pass By Reference(2): ",myObj2);
function passByReference2(obj2){
    console.log("Before - Pass By Refrence(2): ",obj2)
    obj2 = {property: "grapes"};
    obj2.property = "lemon";
}
```
* above example as its shown inside function myObj is reassigned and after that property of obj2 is modified. 
* in code before and after myObj2 value is printed and it will be same even though its pass by reference because changes applied in reassigned variable not in copy of variable addressed value.
* non-primitive datatypes are arrays,objects etc.
