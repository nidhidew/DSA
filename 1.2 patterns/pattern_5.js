/**

 * * * * *
 * * * *
 * * *
 * *
 * 

 */

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("1st number:",(num) => {
        
    for(let i=0; i<num; i++){
        let row = "";
        for(let j=0; j<num-i; j++){
            row += "* ";
        }
        console.log(row);        
    }
    r1.close();
})