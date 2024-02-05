// Encoding string
let str='Codingmart Technologies'
let row=4;
let len=str.length
let col=Math.floor(len/row)+(row - 1)
let mat=new Array()
for(let i=0;i<row;i++){
    mat[i]=[]
    for(let j=0;j<col;j++){
        mat[i][j]=0
    }
}
let curr;
let cout=1
for(let k=0,krow=0,kcol=0;k<len;k++){
    curr=str[k]
    // console.log(curr)
    if(curr==' '){
        mat[krow][kcol]="*"
    }
    else{
        mat[krow][kcol]=curr
        // console.log(mat)
    }
    if(krow===row-1){
        krow=0
        kcol=cout
        cout++
    }
    else{
    krow++
    kcol++}
}
// console.log(mat)
for(let i=0;i<row;i++){
   
    for(let j=0;j<col;j++){
        if(i>j){
            mat[i][j]='*'
        }
    }
}
//console.log(mat)
let out=''
for(let i=0;i<row;i++){
   
    for(let j=0;j<col;j++){
        if(mat[i][j]!==0 )
           out+=mat[i][j]
        
    }
}
console.log(out)