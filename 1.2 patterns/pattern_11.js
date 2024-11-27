/*

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

*/

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("number:",(num) => {
    let start=1;
    for(let i=0;i<num;i++){
        let rows="";
        if(i%2 === 0){
            start = 1;
        } else {
            start = 0;
        }
        for(let j=0; j<i; j++){
            rows += start;
            start = 1-start;
        }
        console.log(rows)
    }  
    r1.close()  
})