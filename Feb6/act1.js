function ratInMaze(m, n) {
    let viewed = [];
    let result = [];

    for (let i = 0; i < n; i++) {
        viewed[i] = [];
        for (let j = 0; j < n; j++) {
            viewed[i][j] = 1;
        }
    }

    function path(i, j, dir) {
        if (i === n - 1 && j === n - 1) {
            result.push(dir);
            return;
        }
       // console.log(result)
        if (i + 1 < n && m[i + 1][j] === 1 && viewed[i + 1][j] === 1) {
            viewed[i][j] = 0;
            path(i + 1, j, dir + "D");
            viewed[i][j] = 1;
        }

        if (j + 1 < n && m[i][j + 1] === 1 && viewed[i][j + 1] === 1) {
            viewed[i][j] = 0;
            path(i, j + 1, dir + "R");
            viewed[i][j] = 1;
        }

        if (j - 1 >= 0 && m[i][j - 1] === 1 && viewed[i][j - 1] === 1) {
            viewed[i][j] = 0;
            path(i, j - 1, dir + "L");
            viewed[i][j] = 1;
        }

        if (i - 1 >= 0 && m[i - 1][j] === 1 && viewed[i - 1][j] === 1) {
            viewed[i][j] = 0;
            path(i - 1, j, dir + "U");
            viewed[i][j] = 1;
        }
    }

    path(0, 0, "");
    let k=[]
    let e
    let r=[]
    for(let w=0;w<result.length;w++){
        k.push(result[w].length)
        e=Math.min(k)

    }
    for(let w=0;w<result.length;w++){
        k.push(result[w].length)
    }
    e=Math.min(...k)
    for(let w=0;w<result.length;w++){
      if(result[w].length===e){
        r.push(result[w])
      }

    }
    result.sort()
    return r ;
}

let m = [
    [1, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1]
];
let n = 4;

console.log(ratInMaze(m, n));
