const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("number:",(num) => {
    let n = 1;
    for(let i=1; i<=num; i++){
        let rows = "";
        for(let j=1; j<=i; j++){
            rows += n+" ";
            n = n+1; // after loop value of n will be incremented
        }
        console.log(rows);    
    }
    r1.close()
})
