const A = [
    [1, 1, 1, 2],
    [1, 9, 1, 2],
    [1, 8, 9, 2],
    [1, 2, 3, 4]
];

function cavityMap(grid, n) {
    let result = grid;
    for(let i = 1; i<=n-2; i++){
        for(let j = 1; j<=n-2; j++){
            if(grid[i][j] > grid[i-1][j] && grid[i][j] > grid[i][j-1] && grid[i][j] > grid[i+1][j] && grid[i][j] > grid[i][j+1]) {
                result[i][j] = 'x';
            }
        }
    }
    console.log(result);
}

cavityMap(A, 4);


const grid = ['989', '191', '111'];

let x = grid.map((i) => i.split('').map((j) => parseInt(j)));

console.log("@@@@@", x);