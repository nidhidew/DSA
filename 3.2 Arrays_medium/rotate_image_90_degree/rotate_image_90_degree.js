let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

let rows = matrix.length;
let cols = matrix[0].length;
let row;
let col;
let n = matrix.length;

//1st rotate rows into cols
for(let i=0;i<rows*cols;i++){
    row = Math.floor(i / cols);
    col = i % cols;
    if(row<col){
        let temp = matrix[row][col];
        matrix[row][col] = matrix[col][row];
        matrix[col][row] = temp;
    }
}
//2nd revers all the elements of the subarrays
for(let i=0;i<n*(Math.floor(n/2));i++){
    row = Math.floor(i / Math.floor(n/2));
    col = i % Math.floor(n/2);
        let temp = matrix[row][col];
        matrix[row][col] = matrix[row][n-1-col];
        matrix[row][n-1-col] = temp;
}
console.log(matrix)