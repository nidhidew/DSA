class Shape {
    area() {
      console.log("Area not defined");
    }
}
  
class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
}
  
const circle = new Circle(5);
console.log(circle.area()); // Output: 78.53981633974483

/*
Here’s a **simple explanation** of **polymorphism** using this code:

---

### **What is Polymorphism?**
Polymorphism means **many forms**. In object-oriented programming, it allows a method to have different behaviors depending on the object that calls it.

---

### **Code Breakdown**

1. **Base Class (`Shape`)**:
   - The `Shape` class provides a generic `area()` method:
     ```javascript
     area() {
       console.log("Area not defined");
     }
     ```
   - This serves as a placeholder for subclasses to define their own specific `area()` implementations.

2. **Derived Class (`Circle`)**:
   - The `Circle` class extends the `Shape` class and provides a specific implementation of the `area()` method:
     ```javascript
     area() {
       return Math.PI * this.radius ** 2;
     }
     ```
   - This overrides the generic `area()` method of `Shape`.

3. **Object Creation**:
   - A `Circle` object is created with a `radius` of `5`:
     ```javascript
     const circle = new Circle(5);
     ```

4. **Calling `area()`**:
   - When `circle.area()` is called:
     - It uses the overridden `area()` method in the `Circle` class, which calculates the actual area of the circle:
       ```javascript
       Math.PI * this.radius ** 2
       ```

---

### **How This Demonstrates Polymorphism**

- **Same Method, Different Behavior**:
  - The `area()` method behaves differently depending on the class:
    - In `Shape`, it prints: `"Area not defined"`.
    - In `Circle`, it calculates the area of a circle.

- The `Circle` class overrides the `area()` method of the `Shape` class, providing a **specialized behavior** while maintaining the same method name.

---

### **Output**

The output of the code is:
```
78.53981633974483
```

This is the result of the `area()` method in the `Circle` class being called and calculating the area for a radius of `5`.
*/