# Javascript Collections

In JavaScript, **collections** are special objects that help store and manage groups of data efficiently. They include **Arrays**, **Objects**, **Maps**, and **Sets**, each designed for specific use cases. Here's an overview of JavaScript collections:

---

### **1. Arrays**
- **Definition**: Arrays are ordered collections of elements.
- **Use Cases**: Best for handling lists of items where the order matters, like a list of numbers or strings.
- **Key Features**:
  - Indexed starting from `0`.
  - Can store any type of value: numbers, strings, objects, etc.
  - Dynamic size.

```javascript
const fruits = ["apple", "banana", "cherry"];
fruits.push("date"); // Adds an element to the end
console.log(fruits); // ["apple", "banana", "cherry", "date"]
```

---

### **2. Objects**
- **Definition**: Objects are collections of key-value pairs.
- **Use Cases**: Useful for representing real-world entities with properties (e.g., a user with a name and age).
- **Key Features**:
  - Keys are strings or symbols.
  - Values can be of any type.

```javascript
const user = { name: "John", age: 30 };
console.log(user.name); // "John"
user.email = "john@example.com"; // Add a new property
```

---

### **3. Maps**
- **Definition**: Maps are collections of key-value pairs, similar to objects, but more flexible.
- **Use Cases**: Better than objects for dynamic keys or when you need to maintain the insertion order of keys.
- **Key Features**:
  - Keys can be of any type (objects, functions, etc.).
  - Maintains insertion order of keys.
  - Provides efficient methods for retrieval and updates.

```javascript
const map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log(map.get("name")); // "John"
console.log(map.size); // 2
```

---

### **4. Sets**
- **Definition**: Sets are collections of unique values.
- **Use Cases**: Useful when you need to store unique values and check for duplicates.
- **Key Features**:
  - No duplicate values allowed.
  - Values can be of any type.
  - Maintains insertion order.

```javascript
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate, won't be added
console.log(set); // Set(2) { 1, 2 }
console.log(set.has(2)); // true
```

---

### **5. WeakMap**
- **Definition**: A `WeakMap` is similar to a `Map`, but keys must be objects, and it doesn't prevent garbage collection.
- **Use Cases**: Useful for storing metadata or private data related to objects.
- **Key Features**:
  - Keys are weakly referenced (not preventing garbage collection).
  - Doesn't have methods like `size` or iterators.

```javascript
let obj = { name: "John" };
const weakMap = new WeakMap();
weakMap.set(obj, "metadata");
console.log(weakMap.get(obj)); // "metadata"
obj = null; // The key-value pair is removed
```

---

### **6. WeakSet**
- **Definition**: A `WeakSet` is similar to a `Set`, but its values must be objects and are weakly referenced.
- **Use Cases**: Useful for tracking objects without preventing garbage collection.
- **Key Features**:
  - Only stores objects.
  - Weakly referenced (objects are removed if no other references exist).

```javascript
let obj1 = { name: "John" };
const weakSet = new WeakSet();
weakSet.add(obj1);
console.log(weakSet.has(obj1)); // true
obj1 = null; // Automatically removed from the WeakSet
```

---

### **7. Typed Arrays**
- **Definition**: Typed arrays are specialized arrays for handling binary data.
- **Use Cases**: Useful for working with raw binary data, such as in WebGL or file handling.
- **Key Features**:
  - Fixed size.
  - Stores values of a single type.
  - Includes types like `Uint8Array`, `Float32Array`, etc.

```javascript
const typedArray = new Uint8Array(4); // Array of 4 unsigned 8-bit integers
typedArray[0] = 255;
console.log(typedArray); // Uint8Array(4) [255, 0, 0, 0]
```

---

### **Comparison Table**

| **Feature**      | **Array** | **Object** | **Map** | **Set** | **WeakMap** | **WeakSet** |
|-------------------|-----------|------------|---------|----------|-------------|-------------|
| **Key Type**      | Index     | String/Symbol | Any     | N/A      | Object      | Object      |
| **Value Type**    | Any       | Any        | Any     | Any      | Any         | Any         |
| **Order Maintained** | Yes    | No         | Yes     | Yes      | N/A         | N/A         |
| **Duplicates**    | Yes       | Yes        | Yes     | No       | N/A         | N/A         |
| **Iteration**     | Yes       | Yes        | Yes     | Yes      | No          | No          |

---

### **When to Use Which?**
- **Array**: When you need ordered collections or lists of data.
- **Object**: When you need to represent entities with named properties.
- **Map**: When you need dynamic keys or a dictionary-like structure.
- **Set**: When you need a collection of unique values.
- **WeakMap**: When you need to associate metadata with objects without preventing garbage collection.
- **WeakSet**: When you need to track objects without memory leaks.

Let me know if you'd like further clarification or examples! 😊