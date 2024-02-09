//this is following the steps from largest rec from histogram prob-84
let matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]];
//let matrix=[[0,1,0,1],[1,1,1,1],[1,1,0,0]];
console.log("Given matrix:");
console.log(matrix);

//convert matrix->histogram

let histogram=[];

for(let i=0;i<matrix.length;i++){
    histogram.push([]);
    for(let j=0;j<matrix[0].length;j++){
        if(i==0){//1st row is equal to matrix 1st row
            histogram[i][j]=+matrix[i][j];
        }else{
            if(histogram[i-1][j]==0){//if previous hist val=0,then just use the matrix value;
                histogram[i][j]=+matrix[i][j];
            }else if(matrix[i][j]==0){//if curr val=0 then hist val=0
                histogram[i][j]=0;
            }else{
                histogram[i][j]=+histogram[i-1][j]+ +matrix[i][j];
            }
        }
    }
}
console.log("Converted histogram:")
console.log(histogram);

let maxArr=[];
let max;
for(let i=0;i<histogram.length;i++){
    let res = calculateWidth(histogram[i]);
    let multi=multiplyWidthHistogram(histogram[i],res);
    max=Math.max(...multi);
    maxArr.push(max);
}
//console.log("Maximum Rectangle:")
return (Math.max(...maxArr));



function calculateWidth(arr) {
    const widthArr = [];

    for (let i = 0; i < arr.length; i++) {
        let width = 1; // Width starts at 1

        if (arr[i] !== 0) {
            // Check forward
            let j = i + 1;
            while (j < arr.length && arr[i] <= arr[j]) {
                width++;
                j++;
            }

            // Check backward
            j = i - 1;
            while (j >= 0 && arr[i] <= arr[j]) {
                width++;
                j--;
            }
        }else{//for 0
            width=1;
        }

        widthArr.push(width);
    }


    return widthArr;
}

function multiplyWidthHistogram(arr1,arr2){
    let res=[];
    for(let i=0;i<arr1.length;i++){
        res.push(arr1[i]*arr2[i]);
    }
    return res;
}