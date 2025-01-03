/*
E
D E
C D E
B C D E
A B C D E
*/

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("number:",(num) => {
    for(let i=0;i<num;i++){
        let pattern = "";
        let star;
        for(let j=0;j<=i;j++){
            star = num-i;
            pattern += String.fromCharCode(64+star+j)+" ";
        }
        console.log(pattern);
    }
    r1.close();
})