function ratInMaze(m,n){
    let visited = new Array(n);
    for(let i=0; i<n; i++){
        visited[i] = new Array(n).fill(0);
    }
    console.log(visited)
    let result = [];
    
    let path = (m, x, y, dir, n) => {
        if (x === n - 1 && y === n - 1) {
            result.push(dir);
            return;
        }
    
       if (m[x][y] === 0 || visited[x][y] === 1) return;
    
        
        visited[x][y] = 1;
        if (x > 0) path(m, x - 1, y, dir + 'U', n);
        if (y > 0) path(m, x, y - 1, dir + 'L', n);
        if (x < n - 1) path(m, x + 1, y, dir + 'D', n);
        if (y < n - 1) path(m, x, y + 1, dir + 'R', n);
        visited[x][y] = 0;
        
    }
    console.log(visited)
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            visited[i][j] = false;
        }
    }
    console.log(visited)
    if (m[0][0] === 0 || m[n - 1][n - 1] === 0) return result;
    
    path(m, 0, 0, "", n);
    
    result.sort();
    return result;
}
    

let m=[
    [1,1,1,0],
    [1,0,1,1],
    [1,0,0,1],
    [1,1,1,1]]
let n=4

console.log(ratInMaze(m,n))