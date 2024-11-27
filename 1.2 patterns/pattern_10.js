/*

*
* *
* * *
* * * *
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

r1.question("number:",(num) => {
    for(let i=1; i<=2*num-1; i++){
        let star = i;
        let row="";
        if(i > num) star = 2*num-i;
        for(let j=1; j<=star; j++){
            row += "*";
        }
        console.log(row)
    }
    r1.close();
    
})