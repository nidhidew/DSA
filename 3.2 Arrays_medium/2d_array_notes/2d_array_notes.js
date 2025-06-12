let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//accessing elements: use matrix[row][col]
console.log(matrix[0][1]);
console.log(matrix[1][1]);
console.log();

//loop through 2d array
console.log("using a nested loop:");
for(let i=0;i<matrix.length;i++){ //row
    for(let j=0;j<matrix[0].length;j++){ //col
        console.log(matrix[i][j]);
    }
}
console.log()

//or

let rows = matrix.length;
let cols = matrix[0].length;
console.log("using a single loop:")
for(let i=0;i<rows*cols;i++){
    let row = Math.floor(i/cols);
    let col = i%cols;
    console.log(matrix[row][col]);
}