const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("enter a digit: ",(n) => {
    let lastdigit = "";
    n = parseInt(n);
    let decimal = 0;
    while(n>0){
        decimal = n % 10;
        decimal = String(decimal);
        n = Math.floor(n / 10);
        lastdigit = lastdigit+decimal;
    }
    lastdigit = Number(lastdigit);
    console.log(lastdigit);
    r1.close();
})

