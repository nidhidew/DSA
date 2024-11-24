const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("1st number:",(num1) => {
    r1.question("2nd number:",(num2) => {
        const sum = parseFloat(num1) + parseFloat(num2);
        console.log(sum)

        r1.close();
    })
})
