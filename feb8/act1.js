function findTheWord(board,word){
  
    let result = [];

   
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j]===word[0]){
               
                findPath(i,j,"",0)
                
            }
        }
    }
    function findPath(i,j,dir,wordC){
        console.log(i,j)
             if(wordC===word.length-1){
                result.push(dir)
                return
             }
             if (i + 1 < board.length && board[i + 1][j] === word[wordC+1] ) {
               
                findPath(i + 1, j, dir + "D",wordC+1 );
               
            }

            if (j + 1 < board[0].length && board[i][j + 1] === word[wordC+1]  ) {
            
                findPath(i, j + 1, dir + "R",wordC+1 );
             
            }

            if (j - 1 >= 0 && board[i][j - 1]===word[wordC+1] ) {
              
                findPath(i, j - 1, dir + "L",wordC+1 );
                
            }

            if (i - 1 >= 0 && board[i - 1][j] === word[wordC+1]) {
              
                findPath(i - 1, j, dir + "U",wordC+1 );
               
            }
    }
     if(result.length===0){
        return false
     }
     else{
        return true
     }

}
let  board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED" 
console.log(findTheWord(board,word))
