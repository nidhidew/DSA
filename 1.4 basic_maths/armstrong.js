const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("enter a digit: ",(n) => {
    let nlength = n.length;
    n = Number(n);
    let decimal;
    let digit = 0;
    let newdecimal = 0;
    while(n>=1){
        decimal = n%10;
        newdecimal = Math.pow(decimal, nlength);
        digit = newdecimal+digit;
        n = Math.floor(n/10);
    }
    console.log(digit)
    
    r1.close();
});
