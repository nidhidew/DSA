/*
1      1
12    12
123  123
12341234

*/
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
r1.question("enter a number..........",(num)=>{
    for(let i=1;i<=num;i++){
        let pattern = "";
        for(let j=1;j<=i;j++){
            pattern += j;
        }
        for(let j=0;j<(num-i)+(num-i);j++){
            pattern += " ";
        }
        for(let j=i;j>=1;j--){
            pattern += j;
        }
        console.log(pattern);
    }
    r1.close();
})
