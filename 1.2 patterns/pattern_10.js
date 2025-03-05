/*

*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*

*/

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("number:",(num) => {
    for(let i=1; i<=2*num-1; i++){
        let star = i;
        let row="";
        if(i > num) star = 2*num-i;
        for(let j=1; j<=star; j++){
            row += "*";
        }
        console.log(row)
    }
    r1.close();
    
})

// const readline = require("readline")
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// r1.question("Enter a number: ", (n) => {
//     let i;
//     let j;
//     let pattern = Number(n);
//     let col;
//     for(i=0;i<2*pattern;i++){
//         let star = "";
//         col = i;
//         for(j=0;j<col;j++){
//             if( col>=pattern ){
//                 col=(2*n)-i;
//             }
//             star+="* "
//         }
//         console.log(star)
//     }
//     r1.close();
// })
