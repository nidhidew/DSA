/*

*  *  *  *  *  *  *  *  *
   *  *  *  *  *  *  *
      *  *  *  *  *
         *  *  *
            *

*/

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("number:",(num) => {
    for(i=0;i<num;i++){
        let row=""
        //space
        for(j=0; j<i; j++){
            row += " "
        }
        //stars
        for(j=0; j<2*num-(2*i+1); j++){
            row += "*"
        }
        //space
        for(j=0; j<i; j++){
            row += " "
        }
        console.log(row)
    }
    r1.close();
})