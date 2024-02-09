let profit = [2,3,1,4];
let  weight = [3,4,6,5];
let n=4, w=8;
let arr = new Array;
let min = weight[0];
for(let i=0;i<weight.length;i++)
{
    for(let j=i+1;j<weight.length;j++)
    {
        if(weight[i]>weight[j])
        {
            weight[i] = weight[i]+weight[j];
            weight[j] = weight[i]-weight[j];
            weight[i] = weight[i]-weight[j];


            profit[i] = profit[i]+profit[j];
            profit[j] = profit[i]-profit[j];
            profit[i] = profit[i]-profit[j];
        }
    }
}
for (let i = 0; i <= n; i++) {
    arr[i] = new Array(w + 1).fill(0);
}
let i,j;
for ( i = 1; i <= n; i++) {
    for ( j = 1; j <= w; j++) {
        if (weight[i - 1] > j) {
            arr[i][j] = arr[i - 1][j];
        } else {
            arr[i][j] = Math.max(profit[i - 1] + arr[i - 1][j - weight[i - 1]], arr[i - 1][j]);
        }
    }
}
console.log(arr[i-1][j-1]+ " is max value");
let present = new Array(n + 1).fill(0);
let k = n, l = w;
while (k > 0 && l > 0) {
    if (arr[k][l] !== arr[k - 1][l]) {
        present[k] = 1;
        l -= weight[k - 1];
    }
    k--;
}

console.log(present.slice(1));