/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let lowestStockPrice = prices[0];

  for(let i = 1; i < prices.length; i++) {
      let diff = prices[i] - lowestStockPrice;

      maxProfit = Math.max(maxProfit, diff);
      lowestStockPrice = Math.min(lowestStockPrice, prices[i]);
  }

  return maxProfit;
};

/**
  [7,1,5,3,6,4], O(n) time complexity

  brute force O(n^2):

  loop thru prices
  for each current el in array, calc diff between the other el
  keep track of max profit

  optimal solution O(n):

  for ex 1, there's no need to calc for prices[0] since it's the largest value,
  so we can ignore it

  prices[1] has a buy value of 1. Any profit between prices[0] and prices[1], prices[1] will
  always win

  so we can disregard prices[0], and make prices[1] our buy value. This means that we will
  always consider the lowest value as our buy value. We'll keep track of the lowest stock price.

  We also need to keep track of max profit as we iterate, updating maxprofit when necessary

  lowestStockPrice
  maxProfit
  diff

  [7,2,6,4,7,5,1,9]
*/