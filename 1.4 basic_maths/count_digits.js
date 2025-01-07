const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("enter a digit: ",(n) => {
    let count = 0;
    let lastdigit;
    
    n = parseInt(n);
    while(n>0){
        lastdigit = n % 10;
        count = count + 1;
        n = Math.floor(n / 10);
    }
    console.log(count);
    r1.close();
})