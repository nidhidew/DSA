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

* The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is
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