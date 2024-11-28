/*
A
B B
C C C
D D D D 
*/

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("number:",(num) => {

    for(let i=0;i<num;i++){
        let rows = "";
        for(let j=0;j<=i;j++){
            rows += String.fromCharCode(65 + i ) + " "
        }
        console.log(rows);        
    }
    r1.close()
})