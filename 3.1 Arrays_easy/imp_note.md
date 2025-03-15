# IMPORTANT NOTE

* if need to find largest number, then assign a dummy value to the variable to store the largest number in that variable during for loop and conditions.

* Why Cyclic Dependency?

    When you rotate an array, each element’s new position is calculated using:

        newIndex=(i+k)%n
        newIndex=(i+k)%n

    This creates a cyclic shift — elements are essentially "wrapping around" the array boundaries.
    The cyclic behavior comes from the % n part — that's why this is a modulo-based rotation problem. 