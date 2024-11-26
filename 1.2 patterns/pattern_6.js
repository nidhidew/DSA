/**

    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1

 */

    const readline = require("readline");

    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
    r1.question("number:",(num) => {
            
        for(let i=0; i<num; i++){
            let row = "";
            for(let j=1; j<=num-i; j++){
                row += j+" ";
            }
            console.log(row);        
        }
        r1.close();
    })