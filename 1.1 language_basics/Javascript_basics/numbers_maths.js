const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); //'100'
console.log(balance.toFixed(2)); //100.00
console.log(balance.toPrecision(3)); //10.5 for 10.520

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

// .MAX_VALUE
// .MIN_VALUE
// THERE ARE MORE METHODS LIKE THIS

// ---------------------------------------------------------------------------------------------------

// methods of Math and variable or values goes to paranthese()

Math.abs()//positive value convert to negative
Math.round()//round of any decimal number
Math.min()//to check which number is lowest in array or given series of number
Math.max()//same to check for highest number
Math.random()//to get decimal random number between given number
// to get non-decimal value do some arithmatic operations
