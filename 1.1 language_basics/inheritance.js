class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
}
  
class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
}
  
const dog = new Dog("Rover");
dog.speak(); // Output: Rover barks.

/*
Here’s a **straightforward explanation** of the code:

1. **Class `Animal`**:
   - Represents a generic animal.
   - Has a constructor that initializes the animal's name:
     ```javascript
     this.name = name;
     ```
   - Has a method `speak()` that prints a generic message:
     ```javascript
     speak() {
       console.log(`${this.name} makes a noise.`);
     }
     ```

2. **Class `Dog` (Child Class)**:
   - Extends (inherits from) the `Animal` class.
   - Overrides the `speak()` method to provide a specific behavior for dogs:
     ```javascript
     speak() {
       console.log(`${this.name} barks.`);
     }
     ```

3. **Creating an Object**:
   - A `Dog` object named `"Rover"` is created:
     ```javascript
     const dog = new Dog("Rover");
     ```
   - The constructor of the `Animal` class is automatically called (due to inheritance), setting `this.name = "Rover"`.

4. **Calling `speak()`**:
   - The `speak()` method of the `Dog` class is called:
     ```javascript
     dog.speak();
     ```
   - Since `Dog` overrides the `speak()` method, it prints:
     ```
     Rover barks.
     ```

---

### **What Each Part Does**
- **`Animal` Class**: Defines the base behavior (a generic animal with a name and the ability to "make a noise").
- **`Dog` Class**: Inherits from `Animal` but customizes the behavior to be specific to dogs (barking).
- **`dog.speak()`**: Calls the overridden `speak()` method in the `Dog` class.

---

### **Output Explanation**
The output of `dog.speak()` is:
```
Rover barks.
```
This happens because the `Dog` class overrides the `speak()` method from the `Animal` class.
*/