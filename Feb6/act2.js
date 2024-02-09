function ratInMaze(m, n) {
    let viewed = [];
    let result = [];

    for (let i = 0; i < n; i++) {
        viewed[i] = [];
        for (let j = 0; j < n; j++) {
            viewed[i][j] = 0;
        }
    }

    path(0, 0, "");

    function path(i, j, dir) {
        for(let l=1;l<=3;l++){
            if (i === n - 1 && j === n - 1) {
                result.push(dir);
                return;
            }
            // console.log(result)
            if (i + l < n && m[i + l][j] === 1 && viewed[i + l][j] === 0) {
                viewed[i][j] = 1;
                path(i + l, j, dir + "D");
                viewed[i][j] = 0;
            }

            if (j + l < n && m[i][j + l] === 1 && viewed[i][j + l] === 0) {
                viewed[i][j] = 1;
                path(i, j + l, dir + "R");
                viewed[i][j] = 0;
            }

            if (j - l >= 0 && m[i][j - l] === 1 && viewed[i][j - l] === 0) {
                viewed[i][j] = 1;
                path(i, j - l, dir + "L");
                viewed[i][j] = 0;
            }

            if (i - l >= 0 && m[i - l][j] === 1 && viewed[i - l][j] === 0) {
                viewed[i][j] = 1;
                path(i - l, j, dir + "U");
                viewed[i][j] = 0;
            }
        }
    }

    //return result;
    result.sort();
    return result;
}

let m = [
    [1, 0, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 1, 1],
    [0, 0, 0, 1]
];
let n = m.length;

let result = ratInMaze(m, n);
// console.log(result);
//sort for length of each path;
result.sort((a, b) => a.length - b.length);
// console.log(result);

console.log("Minimum path:");
let min = result[0].length;
for (path of result) {
    if (path.length == min) {
        console.log(path);
    }
}