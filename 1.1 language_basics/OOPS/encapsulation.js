class BankAccount {
    #balance; // Private field in BankAccount class (data hiding)
  
    constructor(balance) { 
      this.#balance = balance;
    }
  
    deposit(amount) { //public methods
      this.#balance += amount;
    }
  
    getBalance() { //public methods
      return this.#balance;
    }
  }
  
  const account = new BankAccount(100);
  account.deposit(50);
  console.log(account.getBalance()); // Output: 150
  // console.log(account.#balance); // Error: Private field

  
/* 
The provided example demonstrates **encapsulation** in JavaScript using the `class` syntax and **private fields**. Encapsulation is a 
principle of object-oriented programming (OOP) where data is bundled with methods that operate on that data, restricting direct access 
to the internal state of an object.

---

Here’s a **simple explanation** of the code:

1. **Class Definition (`BankAccount`)**:
   - The class represents a bank account. It has a private field `#balance` to store the account balance securely.

2. **Private Field (`#balance`)**:
   - The `#balance` field is private, meaning it **cannot be accessed directly** from outside the class.
   - It is used to store the account's balance securely.

3. **Constructor (`constructor`)**:
   - When you create a new bank account, the `constructor` initializes the `#balance` with the value you provide.

   ```javascript
   const account = new BankAccount(100); // Starts with balance 100
   ```

4. **Public Method (`deposit`)**:
   - This method adds a specified `amount` to the balance. 
   - Example: `account.deposit(50);` adds `50` to the balance.

5. **Public Method (`getBalance`)**:
   - This method returns the current balance of the account.
   - Example: `console.log(account.getBalance());` prints the balance.

6. **Key Point**:
   - The private field `#balance` **cannot be accessed directly**:
     ```javascript
     console.log(account.#balance); // ❌ Error
     ```
   - You must use the provided methods (`deposit` and `getBalance`) to interact with it.

---

### **What Happens in the Example?**

1. A new `BankAccount` object is created with an initial balance of `100`.
   ```javascript
   const account = new BankAccount(100);
   ```

2. `50` is added to the balance using the `deposit` method.
   ```javascript
   account.deposit(50); // Balance becomes 150
   ```

3. The updated balance is retrieved and printed using the `getBalance` method.
   ```javascript
   console.log(account.getBalance()); // Output: 150
   ```

---

### **Summary**

- The `BankAccount` class encapsulates the `#balance` field so it cannot be accessed or modified directly.
- The `deposit` method is used to add money, and `getBalance` is used to check the balance.
- Encapsulation ensures the balance is protected and only changed in controlled ways.
*/