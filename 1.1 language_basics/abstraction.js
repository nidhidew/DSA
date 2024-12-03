class AbstractVehicle {
    constructor() {
      if (new.target === AbstractVehicle) {
        throw new Error("Cannot instantiate abstract class.");
      }
    }
  
    move() {
      throw new Error("Method 'move()' must be implemented.");
    }
}
  
class Car extends AbstractVehicle {
    move() {
      console.log("Car is moving");
    }
}
  
const car = new Car();
car.move(); // Output: Car is moving
  
// const vehicle = new AbstractVehicle(); // Error: Cannot instantiate abstract class.

/*
Here’s a **simple explanation** of **abstraction** using the given code:

---

### **What is Abstraction?**
Abstraction in object-oriented programming means **hiding implementation details** and only exposing the necessary functionalities. Abstract classes act as blueprints for other classes, defining the structure but not the complete implementation.

---

### **Code Breakdown**

1. **Abstract Class (`AbstractVehicle`)**:
   - The `AbstractVehicle` class is designed to be a blueprint.
   - It:
     - **Prevents direct instantiation** by throwing an error in the constructor:
       ```javascript
       if (new.target === AbstractVehicle) {
         throw new Error("Cannot instantiate abstract class.");
       }
       ```
     - Defines the `move()` method, but doesn’t provide an implementation. Instead, it forces subclasses to implement it:
       ```javascript
       move() {
         throw new Error("Method 'move()' must be implemented.");
       }
       ```

2. **Concrete Class (`Car`)**:
   - The `Car` class extends `AbstractVehicle` and **implements the `move()` method**:
     ```javascript
     move() {
       console.log("Car is moving");
     }
     ```

3. **Object Creation**:
   - A `Car` object is created, and its `move()` method is called:
     ```javascript
     const car = new Car();
     car.move(); // Output: Car is moving
     ```

4. **Prevent Instantiation of Abstract Class**:
   - If you try to create an instance of `AbstractVehicle`, an error is thrown:
     ```javascript
     const vehicle = new AbstractVehicle(); // Error: Cannot instantiate abstract class.
     ```

---

### **How This Demonstrates Abstraction**

1. **Blueprint for Subclasses**:
   - The `AbstractVehicle` class provides the structure (a `move()` method) but doesn’t define how it works.
   - Subclasses like `Car` must implement the `move()` method.

2. **Hiding Implementation**:
   - Users of the `Car` class don’t need to know how `move()` is implemented; they just call it.

3. **Error Prevention**:
   - Abstract classes like `AbstractVehicle` ensure that no incomplete objects can be created (e.g., an object without a valid `move()` method).

---

### **Output**

- The code produces:
  ```
  Car is moving
  ```

- If you try to create an instance of `AbstractVehicle`, it throws an error:
  ```
  Error: Cannot instantiate abstract class.
  ```

---

### **Summary**
Abstraction ensures that:
- You define **what must be done** (e.g., `move()`).
- The **details of how** it is done are left to subclasses (e.g., `Car` implements `move()`).
*/