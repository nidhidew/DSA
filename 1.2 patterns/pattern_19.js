/*

* * * * * * * * * *
* * * *     * * * *
* * *         * * *
* *             * *
*                 *
*                 *
* *             * *
* * *         * * *
* * * *     * * * *
* * * * * * * * * *

*/

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("number: ",(num) => {
    for(let i=0;i<num;i++){
        let pattern = ""
        for(let j=0;j<num-i;j++){
            pattern += "*";
        }
        for(let j=0;j<i*2;j++){
            pattern += " ";
        }
        for(let j=0;j<num-i;j++){
            pattern += "*";
        }
        console.log(pattern);
    }
    for(let i=1;i<=num;i++){
        let pattern = "";
        for(let j=0;j<i;j++){
            pattern += "*";
        }
        for(let j=0;j<num*2-2*i;j++){
            pattern += " ";
        }
        for(let j=0;j<i;j++){
            pattern += "*";
        }
        console.log(pattern);
    }
    r1.close();
});