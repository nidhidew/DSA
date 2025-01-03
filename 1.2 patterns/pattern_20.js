/*

*                 * 
* *             * *
* * *         * * *
* * * *     * * * *
* * * * * * * * * *
* * * *     * * * *
* * *         * * *
* *             * *
*                 *

*/

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("number: ",(num)=>{
    for(let i=1; i<=(2*num)-1; i++){
        let pattern = "";
        let s1 = i;
        if(i > num) s1 = 2*num-i;
        for(let j=1; j<=s1; j++){
            pattern += "* ";
        }
        let s2 = i;
        // if()
        for(let j=1; j<=num*2-i*2; j++){
            pattern += "  ";
        }
        for(let j=1; j<=i*2-num*2; j++){
            pattern += "  ";
        }
        for(let j=1; j<=s1; j++){
            pattern += "* ";
        }
        console.log(pattern);
    }
    r1.close();
});