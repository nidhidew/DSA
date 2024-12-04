### **Time Complexity**: Simple Explanation

Time complexity is a way to measure **how the runtime of an algorithm grows as the size of the input increases**. It helps us understand the efficiency of an algorithm.

---

### **Why Time Complexity?**
- To compare different algorithms and choose the most efficient one.

---

### **Common Time Complexities**
Here are the most common types of time complexities, ranked from best (fastest) to worst (slowest):

| **Time Complexity** | **Notation**    | **Example**                               | **Explanation**                                          |
|----------------------|-----------------|-------------------------------------------|---------------------------------------------------------|
| **Constant**         | `O(1)`         | Accessing an array element: `arr[0]`      | Takes the same time regardless of input size.           |
| **Logarithmic**      | `O(log n)`     | Binary search                             | Time grows slowly as input size increases.              |
| **Linear**           | `O(n)`         | Looping through an array                  | Time grows proportionally with input size.              |
| **Linearithmic**     | `O(n log n)`   | Merge Sort, Quick Sort (best/avg cases)   | Combines linear and logarithmic growth.                 |
| **Quadratic**        | `O(n²)`        | Nested loops                              | Time grows exponentially with input size.               |
| **Cubic**            | `O(n³)`        | 3 nested loops                            | Rarely used due to inefficiency.                        |
| **Exponential**      | `O(2^n)`       | Recursive problems (e.g., Fibonacci)      | Time doubles with every small increase in input size.   |
| **Factorial**        | `O(n!)`        | Permutations, combinatorics               | Infeasible for even small input sizes.                  |

---

### **Examples**

1. **Constant Time (`O(1)`)**:
   - The operation does not depend on the input size.
   ```javascript
   function getFirstElement(arr) {
     return arr[0]; // Always takes 1 step
   }
   ```

2. **Linear Time (`O(n)`)**:
   - The time grows in direct proportion to the size of the input.
   ```javascript
   function printElements(arr) {
     for (let i = 0; i < arr.length; i++) {
       console.log(arr[i]); // Iterates once for each element
     }
   }
   ```

3. **Quadratic Time (`O(n²)`)**:
   - The time grows exponentially as input size increases, often due to nested loops.
   ```javascript
   function printPairs(arr) {
     for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr.length; j++) {
         console.log(arr[i], arr[j]); // Pairing each element
       }
     }
   }
   ```

4. **Logarithmic Time (`O(log n)`)**:
   - The time grows slowly, often seen in divide-and-conquer algorithms.
   ```javascript
   function binarySearch(arr, target) {
     let low = 0, high = arr.length - 1;
     while (low <= high) {
       const mid = Math.floor((low + high) / 2);
       if (arr[mid] === target) return mid;
       if (arr[mid] < target) low = mid + 1;
       else high = mid - 1;
     }
     return -1;
   }
   ```

---

### **How to Identify Time Complexity**
- **Look at loops**:
  - Single loop → `O(n)`
  - Nested loop → `O(n²)`
- **Look at recursion**:
  - Divide input in half → `O(log n)`
  - Process all combinations → `O(2^n)`
- **Use common patterns** (e.g., searching, sorting algorithms).

---

### **Key Takeaways**
- Focus on **worst-case scenarios** unless specified otherwise.
- Time complexity helps determine **scalability**: How well your algorithm performs as input size increases.
- Always strive for more efficient algorithms (lower complexity).
