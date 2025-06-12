let matrix = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
]

let rows = matrix.length;
let cols = matrix[0].length;

let rowZero = new Array(rows).fill(false);
let colZero = new Array(cols).fill(false);

for(let i=0;i<rows*cols;i++){
    let r = Math.floor(i / cols);
    let c = i % cols;
    if(matrix[r][c] == 0){
        rowZero[r] = true;
        colZero[c] = true;
    }
}

for(let j=0;j<rows*cols;j++){
    let r = Math.floor(j / cols);
    let c = j % cols;
    if(rowZero[r] || colZero[c]){
        matrix[r][c] = 0;
    }
}
console.log(matrix)