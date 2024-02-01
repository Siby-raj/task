function totalProfit(prices){
    
       if(prices.length<=1){
        return 0;
       }
       let max=0;
       for(let i=0;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            max+=prices[i]-prices[i-1];
        }
       }
       console.log(max)
       return max
    

}
prices=[7,1,5,3,6,4]
totalProfit(prices)