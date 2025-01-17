### Recursion in JavaScript

**Recursion** is a programming concept where a function calls itself to solve a problem. 

---

### **Key Components of Recursion**
1. **Base Case**: The condition under which the recursion stops. Without it, the recursion will run infinitely.
2. **Recursive Case**: The part of the function where it calls itself to break the problem into smaller parts.

---

### **Examples of Recursion in JavaScript**

#### 1. **Factorial Using Recursion**
```javascript
function factorial(n) {
    // Base case: factorial(0) or factorial(1) is 1
    if (n === 0 || n === 1) return 1;
    // Recursive case: n * factorial(n - 1)
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

#### 2. **Fibonacci Sequence**
```javascript
function fibonacci(n) {
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8 (Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8)
```

#### 3. **Sum of an Array**
```javascript
function sumArray(arr, n) {
    // Base case: when no elements are left
    if (n <= 0) return 0;
    // Recursive case: sum of the last element + sum of the rest
    return arr[n - 1] + sumArray(arr, n - 1);
}

let arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr, arr.length)); // Output: 15
```

---

### **Use Cases of Recursion in DSA**

#### 1. **Binary Search**
```javascript
function binarySearch(arr, target, left, right) {
    if (left > right) return -1; // Base case: element not found

    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid; // Base case: target found

    // Recursive case
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

let sortedArray = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(sortedArray, 7, 0, sortedArray.length - 1)); // Output: 3
```

#### 2. **Tower of Hanoi**
```javascript
function towerOfHanoi(n, from, to, aux) {
    if (n === 1) {
        console.log(`Move disk 1 from ${from} to ${to}`);
        return;
    }
    towerOfHanoi(n - 1, from, aux, to);
    console.log(`Move disk ${n} from ${from} to ${to}`);
    towerOfHanoi(n - 1, aux, to, from);
}

towerOfHanoi(3, 'A', 'C', 'B');
/*
Output:
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
*/
```

#### 3. **Tree Traversal (Binary Tree)**
```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inorderTraversal(node) {
    if (node === null) return;
    inorderTraversal(node.left); // Visit left
    console.log(node.value);    // Visit root
    inorderTraversal(node.right); // Visit right
}

// Example tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

inorderTraversal(root);
// Output: 4, 2, 5, 1, 3
```

---

### **Advantages of Recursion**
1. Simplifies code for problems like tree traversals, factorial, Fibonacci, etc.
2. Reduces the complexity of algorithms like divide-and-conquer.

---

### **Disadvantages of Recursion**
1. **Stack Overflow**: Too many recursive calls can exceed the call stack size.
2. **Performance**: Can be slower than iterative solutions due to repeated calculations (use **memoization** to optimize).
3. Harder to debug and understand compared to iterative solutions.

---

### **Optimizations**
1. **Tail Recursion**: Certain programming languages optimize tail-recursive functions.
2. **Memoization**: Cache results of recursive calls to avoid redundant calculations.
   ```javascript
   function fibonacciMemo(n, memo = {}) {
       if (n in memo) return memo[n];
       if (n === 0) return 0;
       if (n === 1) return 1;

       memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
       return memo[n];
   }

   console.log(fibonacciMemo(50)); // Output: 12586269025
   ```

---

### When to Use Recursion:
- Problems with repetitive subproblems (e.g., Fibonacci, factorial).
- Divide-and-conquer strategies (e.g., quicksort, mergesort).
- Traversing hierarchical structures (e.g., trees, graphs).