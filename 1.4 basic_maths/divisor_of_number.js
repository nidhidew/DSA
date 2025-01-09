const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("enter a digit: ",(n) => {
    n=Number(n);
    for(let i=1;i<=n;i++){
        if(n%i === 0){
            console.log(i)
        }
    }
    r1.close();
});
