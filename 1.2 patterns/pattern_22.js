// /*

// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4

// */

/*const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("Enter the size of the pattern: ", (n) => {
    n = parseInt(n); // Convert input to an integer

    for (let i = 0; i < 2 * n - 1; i++) {
        let pattern = "";

        for (let j = 0; j < 2 * n - 1; j++) {
            // Calculate the minimum distance to the edge
            let distance = Math.min(i, j, 2 * n - 2 - i, 2 * n - 2 - j);
            
            // Add the appropriate number to the pattern
            pattern += (n - distance) + " ";
        }

        console.log(pattern.trim());
    }

    r1.close();
});
*/