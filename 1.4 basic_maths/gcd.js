const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("enter a 1st digit: ",(n1) => {
    r1.question("enter a 2nd digit: ",(n2) => {
        n1=Number(n1);
        n2=Number(n2);
    let divisior1 = [];
    let divisior2 = [];
    for(let i=1;i<=n1;i++){
        if(n1%i === 0){
            divisior1.push(i);
        }
    }
    for(let j=1;j<=n2;j++){
        if(n2%j === 0){
            divisior2.push(j);
        }
    }
    
    function findMatchingIndices(arr1, arr2){
        return arr1.filter(value => arr2.includes(value));
    }
    let result = findMatchingIndices(divisior1, divisior2);
    
    console.log("Divisior 1:",divisior1);
    console.log("Divisior 2:",divisior2);
    
    console.log("GCD: ",result);
    
    r1.close();
    })
})