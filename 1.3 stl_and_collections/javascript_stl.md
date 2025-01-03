# Javascript STL

In JavaScript, STL (Standard Template Library) refers to the built-in methods and data structures that allow developers to efficiently manipulate and organize data. These are not explicitly referred to as STL in JavaScript but offer similar functionality to what STL provides in C++.

Here's a breakdown of JavaScript's **built-in data structures** and their related methods:

---

## **1. Arrays**
Arrays are ordered collections of elements, and JavaScript provides many built-in methods to manipulate them.

### **Key Methods**
- **Traversal**
  - `forEach()`: Executes a function for each array element.
  - Example:
    ```javascript
    [1, 2, 3].forEach(num => console.log(num));
    ```

- **Search**
  - `indexOf(value)`: Returns the index of the first occurrence of the value.
  - `includes(value)`: Checks if the array contains a value.
  - `find(callback)`: Returns the first element that satisfies the callback condition.
  - `filter(callback)`: Returns all elements that satisfy the callback condition.

- **Sorting**
  - `sort(compareFunction)`: Sorts elements (default is lexicographical order).
    ```javascript
    [3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]
    ```

- **Manipulation**
  - `push() / pop()`: Add/remove elements at the end.
  - `unshift() / shift()`: Add/remove elements at the beginning.
  - `splice(index, count, ...items)`: Modify the array at a specific index.

- **Transformation**
  - `map(callback)`: Creates a new array with transformed elements.
    ```javascript
    [1, 2, 3].map(num => num * 2); // [2, 4, 6]
    ```
  - `reduce(callback, initialValue)`: Reduces the array to a single value.
    ```javascript
    [1, 2, 3].reduce((acc, num) => acc + num, 0); // 6
    ```

---

## **2. Strings**
Strings are sequences of characters.

### **Key Methods**
- **Search**
  - `indexOf(value)`: Returns the index of the first occurrence.
  - `includes(value)`: Checks if the string contains the value.
  - `startsWith() / endsWith()`: Check if the string starts/ends with a value.

- **Manipulation**
  - `slice(start, end)`: Extracts part of the string.
  - `split(separator)`: Splits the string into an array.
  - `replace(oldValue, newValue)`: Replaces occurrences of a value.

- **Transformation**
  - `toUpperCase() / toLowerCase()`: Converts the case of the string.
  - `trim()`: Removes whitespace from both ends.

---

## **3. Objects**
Objects are key-value pairs.

### **Key Methods**
- `Object.keys(obj)`: Returns an array of the object's keys.
- `Object.values(obj)`: Returns an array of the object's values.
- `Object.entries(obj)`: Returns an array of key-value pairs.
- `Object.assign(target, source)`: Copies properties from one object to another.

---

## **4. Sets**
A `Set` is a collection of unique values.

### **Key Methods**
- `add(value)`: Adds a value to the set.
- `delete(value)`: Removes a value from the set.
- `has(value)`: Checks if the value is in the set.
- `size`: Returns the size of the set.

---

## **5. Maps**
A `Map` is a collection of key-value pairs where keys can be of any type.

### **Key Methods**
- `set(key, value)`: Adds a key-value pair.
- `get(key)`: Retrieves the value for a key.
- `has(key)`: Checks if the key exists.
- `delete(key)`: Removes a key-value pair.
- `size`: Returns the size of the map.

---

## **6. Promises**
For handling asynchronous operations.

### **Key Methods**
- `then()`: Executes a callback when the promise is resolved.
- `catch()`: Executes a callback when the promise is rejected.
- `finally()`: Executes a callback regardless of the outcome.

---

## **7. Date**
To work with dates and times.

### **Key Methods**
- `Date.now()`: Returns the current timestamp.
- `new Date()`: Creates a new date object.
- `toLocaleString()`: Formats the date as a string.

---

## **8. Math**
For mathematical operations.

### **Key Methods**
- `Math.max(...numbers)`: Returns the maximum value.
- `Math.min(...numbers)`: Returns the minimum value.
- `Math.random()`: Generates a random number between 0 and 1.
- `Math.round(value)`: Rounds a number to the nearest integer.

---

## **9. JSON**
For working with JSON data.

### **Key Methods**
- `JSON.stringify(object)`: Converts an object to a JSON string.
- `JSON.parse(jsonString)`: Converts a JSON string to an object.

---

## **10. Iterators and Generators**
Used for custom iteration.

### **Example Generator**
```javascript
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generatorFunction();
console.log(gen.next()); // { value: 1, done: false }
```

---
