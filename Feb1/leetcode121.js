let  prices = [7,6,4,3,1]
function maxProfit(prices) {
    const n = prices.length;
    let profit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < n; ++i) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            profit = Math.max(profit, prices[i] - minPrice);
        }
    }

    return profit;
}
console.log(maxProfit(prices))