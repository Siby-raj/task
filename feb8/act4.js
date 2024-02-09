let nums = [1,2,3,1]
let rob=nums[0]
let result=robHouse(0)
let rob1=nums[1]
let resul1=robHouseAdd(1)
function robHouse(i){
    console.log('hi',i)
     if(i+2>nums.length-1){
        return rob
    }
    if(i+3>nums.length-1){
        rob+=nums[i+2]
    }
    if(nums[i+3]>nums[i+2]){
        //console.log("1")
           rob+=nums[i+3]
          robHouse(i+=3)
    }
    else if(nums[i+3]<=nums[i+2]){
       // console.log("2")
        rob+=nums[i+2]
        robHouse(i=i+2)
        //console.log(i)
    }
    else{

    }
    //console.log(rob)

   return rob
}
function robHouseAdd(i){
    console.log('hi',i)
     if(i+2>nums.length-1){
        return rob1
    }
    if(i+3>nums.length-1){
        rob1+=nums[i+2]
    }
    if(nums[i+3]>nums[i+2]){
        //console.log("1")
           rob1+=nums[i+3]
          robHouseAdd(i+=3)
    }
    else if(nums[i+3]<=nums[i+2]){
       // console.log("2")
        rob1+=nums[i+2]
        robHouseAdd(i=i+2)
        //console.log(i)
    }
    else{

    }
    //console.log(rob)

   return rob1
}
console.log(result)
console.log(resul1)
// console.log(Math.max(resul1,result||0))

