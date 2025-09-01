/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        let profit = price - minPrice;
        maxProfit = Math.max(maxProfit, profit);
    }
    return maxProfit;
};

console.log(maxProfit([7,6,5,3,21,4])) // 18