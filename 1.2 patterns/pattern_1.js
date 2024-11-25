/*

 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *

*/

// if give input manualy in code
// for (let i = 0; i < 5; i++) {
//     let row = ""; // Initialize an empty string for each row
//     for (let j = 0; j < 5; j++) {
//         row += "* "; // Add a star to the row
//     }
//     console.log(row); // Print the complete row
// }


// if give input from cli only
const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("1st number:",(num) => {
        for (i = 0; i < num; i++) {
            let row = ""; // Initialize an empty string for each row
            for (j = 0; j < num; j++) {
                row += "* "; // Add a star to the row
            }
            console.log(row); // Print the complete row
        }

        r1.close();
})


