let people = [1,2], limit = 3
people.sort((a,b)=>b-a)
let boat=0
console.log(people)
for(let i=0;i<people.length;i++){
   
    if(people[i]<=limit){
       
      
            if(people[i]+people[people.length-1]<=limit){
                people[i]=null;
                people.pop()
                console.log("1",people)
                boat++
            }else {
                people[i]=null
                console.log("2",people)
                boat++
                
            }
        

    }
    
  
}
console.log(boat)