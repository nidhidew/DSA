const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("enter a digit: ",(n) => {
    let lastdigit = "";
    n = Number(n);
    let compareNum = n;
    let decimal = 0;
    while(n>0){
        decimal = n % 10;
        decimal = String(decimal);
        n = Math.floor(n / 10);
        lastdigit = lastdigit+decimal;
    }
    lastdigit = Number(lastdigit);
    if(compareNum === lastdigit){
        console.log("input ",compareNum)
        console.log("output ",lastdigit);
        console.log("Input is palindrome")
    }else{
        console.log("input ",compareNum)
        console.log("output ",lastdigit);
        console.log("Input is not palindrome")
    }
    r1.close();
});
