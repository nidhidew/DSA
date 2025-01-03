/*

* * * *
*     *
*     *
* * * *

*/

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("number: ",(n) =>{
    for(let i=0; i<n; i++){
        let pattern = "";
        for(let j=0; j<n; j++){
            if(i==0 || j==0 || i==n-1 || j==n-1){
                pattern += "* ";
            }
            else{
                pattern += "  "
            }
        }
        console.log(pattern);        
    }
    r1.close();
});