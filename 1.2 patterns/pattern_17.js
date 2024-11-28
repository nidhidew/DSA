/*
      A
    A B A
  A B C B A
A B C D C B A 

*/

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("number:",(num) => {
    for(let i=1; i<num; i++){
        let rows = "";
        
        for(let j=1; j<num-i; j++){
            rows += " "
        }
        for(let j=1; j<=i; j++){
            rows += String.fromCharCode(64+j)            
        }
        for(let j=i-1; j>=1; j--){
            rows += String.fromCharCode(64+j)     
        }
        for(let j=1; j<num-i-1; j++){
            rows += " "
        }
        console.log(rows);        
    }
    r1.close()
})