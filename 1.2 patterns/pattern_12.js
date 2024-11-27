/*
1      1
12    12
123  123
12341234

*/
const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("number:",(num) => {

    for(let i=1; i<=4; i++){
        rows = "";
        for(let j=1; j<=i; j++){
            rows += j
        }
        for(let j=1; j<=num-i; j++){
            rows += "  "
        }
        for(let j=i; j>=1; j--){
            rows += j
        }
        console.log(rows);
    }
    r1.close();
})