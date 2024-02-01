function timeTaken(pass){
   let a=[];
   let prev;
   let sum=0;
   for(let i=0;i<pass.length;i++){
    
    
    if(i===0){
        a.push[pass[i]];
        prev=pass[i]
        // console.log("prev",prev)
        sum+=1
         console.log("sum",sum)
    }
    else{
        if(a.includes(pass[i])){
            sum+=0;
           console.log("sum",sum)
        }
        else{
        if(pass[i]%3===0){
            console.log('pass',pass[i])
             console.log("prev",prev)
        if(pass[i]===prev+1  ||pass[i]===prev+3 || pass[i]===prev-3){
            
            sum=sum+1;
            a.push(pass[i])
            prev=pass[i]
            console.log("sum:",sum)
          
       }
       else{
        sum=sum+2
        prev=pass[i]
        a.push(pass[i])
         console.log("sum:",sum)
        //console.log(sum)
       }
    }
    if(pass[i]%3===1){
        console.log('pass',pass[i])
        console.log("prev",prev)
        if(pass[i]===prev+3 || pass[i]===prev-1 || pass[i]===prev+3){
            sum+=1;
            prev=pass[i]
            a.push(pass[i])
            console.log("sum:",sum)
          //  console.log(sum)
       }
       else{
        sum=sum+2;
        prev=pass[i]
          a.push(pass[i])
        console.log("sum:",sum)
        //console.log(sum)
       }
    }  
    if(pass[i]%3===2){
        console.log('pass',pass[i])
        console.log("prev",prev)
        if(pass[i]===prev-1 ||pass[i]===prev+3  ||pass[i]===prev+1  ||pass[i]===prev-3 ){
            sum=sum+1;
             console.log("sum:",sum)
            prev=pass[i]
            a.push(pass[i])
          //  console.log(sum)
       }
       else{
        sum=sum+2;
        prev=pass[i]
        a.push(pass[i])
         console.log("sum:",sum)
        //console.log(sum)
       }
    }

   } 
}
}
return sum
}
let arr=[8,3,4,4,6,1]
console.log(timeTaken(arr))