# IMPORTANT NOTE

* Why Cyclic Dependency?

    When you rotate an array, each element’s new position is calculated using:

        newIndex=(i+k)%n
        newIndex=(i+k)%n

    This creates a cyclic shift — elements are essentially "wrapping around" the array boundaries.
    The cyclic behavior comes from the % n part — that's why this is a modulo-based rotation problem. 

* If your approach results in **high time complexity**, avoid the following:  

**1. Nested Loops (O(n²) or worse)**  
- **Example:** Using two loops to find duplicates or sort when a better approach exists.  
- **Fix:** Use hash sets, sorting, or two-pointer techniques instead of brute force.  

**2. Unnecessary Traversals**  
- **Example:** Traversing an array multiple times when one pass can do the job.  
- **Fix:** Try to solve problems in a **single pass** (O(n)) whenever possible.  

**3. Using Extra Space Inefficiently**  
- **Example:** Creating a new array instead of modifying the original one.  
- **Fix:** Modify the array in-place if allowed.  

**4. Recursion Without Memoization (Leads to Exponential Complexity O(2ⁿ))**  
- **Example:** Fibonacci using plain recursion.  
- **Fix:** Use **memoization** or **dynamic programming** to optimize.  

**5. Unnecessary Sorting**  
- **Example:** Sorting when you only need the max/min element.  
- **Fix:** Use **heap/priority queue** or linear search for finding max/min.  

**6. Checking for Duplicates Inefficiently**  
- **Example:** Using nested loops to check for duplicates.  
- **Fix:** Use a **Set or Map** for O(1) lookups.  

**7. Ignoring Constraints & Edge Cases**  
- **Example:** Using O(n²) logic when n is large (e.g., 10⁵ or more).  
- **Fix:** Always check constraints and choose an optimal algorithm accordingly.  

* if looking for largest/second largest/smallest, then assign a dummy value to variable largest/smallest/second and if condition approves then assign that value which is compared.

when trying writing condition logic, then consider that varaible value(aready assigned) should be opposite to value which is used to comapre.
for example: if (largest < a[i]) means if a[i] is largest then assign that to largest variable

```
if(largest < a[i]){
	largest = a[i]
}
```
similar can be try for other logics like,second largest/smallest etc.

* iteration means how many time loop will run

* if array length is n then
    * i = 0;i < n for n iteration
    * i = 1;i < n for n-1 iteration
    * i = 0;i <= n for n+1 iteration