function findMissingNo(array){
      let l=array.length;
      let a=Math.max(...array)
      for(let j=1;j<a;j++){
            if(array.includes(j)){
                // exit the  if loop
            }
            else{
                return j
                     
            }
      }
      
}
let a=[12,10,8,6,3,2,1,4]
console.log( findMissingNo(a))
console.log(a)