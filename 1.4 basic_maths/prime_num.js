const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("enter a digit: ",(n) => {
    n=Number(n);
    let divisior = [];
    for(let i=1;i<=n;i++){
        if(n%i === 0){
            divisior.push(i);
        }
    }
    if(divisior.length == 2 && divisior[divisior.length-1] == n){
        console.log(`Input number ${n} is prime and the divisior is `,divisior);
    }else if(divisior.length > 2 && divisior[divisior.length-1] == n){
        console.log(`Input number ${n} is not prime and the divisior is `,divisior);
    }else{
        console.log(divisior);
    }
    r1.close();
})