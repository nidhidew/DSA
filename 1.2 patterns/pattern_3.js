/**

 1
 1 2
 1 2 3
 1 2 3 4
 1 2 3 4 5

 */

 const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("1st number:",(num) => {
        
    for(let i=1; i<=num; i++){
        let row = "";
        for(let j=1; j<=i; j++){
            row += j+" ";
        }
        console.log(row);        
    }
    r1.close();
})