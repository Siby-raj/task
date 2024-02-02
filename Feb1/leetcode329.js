let matrix = [[9,9,4],[6,6,8],[2,1,1]]
var longestIncreasingPath = function(matrix) {
    if (matrix.length === 0) return 0;
    
    const rows = matrix.length;
    console.log("row",rows)
    const cols = matrix[0].length;
    console.log("cols",cols)
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const memo = [];
    let maxLength = 0;
    
    for (let i = 0; i < rows; i++) {
        memo.push(Array(cols).fill(0));
        console.log(`memo ${i}`,memo)
    }
    
    const dfs = (row, col) => {
        if (memo[row][col] !== 0) return memo[row][col];
        
        let maxPath = 1;
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            console.log("newRow",newRow)
            const newCol = col + dy;
            console.log("newcol",newCol)
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && matrix[newRow][newCol] > matrix[row][col]) {
                maxPath = Math.max(maxPath, 1 + dfs(newRow, newCol));
                console.log(maxPath)
            }
        }
        memo[row][col] = maxPath;
        console.log(maxPath)
        return maxPath;
    };
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            maxLength = Math.max(maxLength, dfs(i, j));
            console.log("maxlength",maxLength)
        }
    }
    console.log("maxlength",maxLength)
    
    return maxLength;
};
longestIncreasingPath(matrix)