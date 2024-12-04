const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/*
r1.question("1st number:",(num1) => {
    r1.question("2nd number:",(num2) => {
        //if condition
        if(num1 < num2){
            console.log(num1," is smaller");
        }
        r1.close();
    })
})
*/
/*
r1.question("1st number:",(num1) => {
    r1.question("2nd number:",(num2) => {
        //if else condition
        if(num1 < num2){
            console.log(num1," is smaller");
        } else {
            console.log(num2," is smaller")
        }
        r1.close();
    })
})
*/
/*
r1.question("1st number:",(num1) => {
    r1.question("2nd number:",(num2) => {
        //if else nested condition
        if(num1 < num2){
            console.log(num1," is smaller");
        } else if(num1 > num2){
            console.log(num2," is smaller")
        } else if(num1 === num2){
            console.log("both input is same")
        } else {
            console.log("invalid input");
        }
        r1.close();
    })
})
*/
/*
r1.question("1st number:",(num1) => {
    r1.question("2nd number:",(num2) => {
        //ternary operator
        num1 < num2 ? console.log(num2+" is bigger") : console.log(num1+" is bigger");
        r1.close();
    })
})
*/
/*
r1.question("1st number:",(num1) => {
    r1.question("2nd number:",(num2) => {
        //switch case

        switch(true){
            case num1 > num2:
                console.log(num1+" is bigger")
                break;
            case num2 > num1:
                console.log(num2+" is bigger")
                break;
            default:
                console.log("invalid inputs");
        }
        r1.close();
    })
})
*/