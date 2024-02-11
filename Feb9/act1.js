
function solveSuduko(board){
    
    for(let i=0;i<board.length;i++){
        for(let j=0 ;j<board[0].length;j++){
            if(board[i][j]=="."){
               
              for(let k="1";k<="9";k++){
                if(isValid(board,i,j,k)){
                    board[i][j]=k
                    if(solveSuduko(board)===true){
                        return true
                    }
                    else{
                        board[i][j]="."
                    }
                }
                return false
              }
            
            
            }
         
        }
    }
    return true
    
}
function isValid(board,row,col,k){
    for(let i=0;i<9;i++){
        if(board[i][col]===k){
            return false
        }
        if(board[row][i]===k){
            return false
        }
        if (board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] === k) {
            return false;
        }
    }
    return true
}
let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

console.log(solveSuduko(board))