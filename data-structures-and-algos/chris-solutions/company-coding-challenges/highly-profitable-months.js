/**
 * The stocks of a company are being surveyed to analyze the net profit of the company over a period of several months.
 * 
 * For an analysis parameter k, a group of k consecutive months is said to be highly profitable if the values of the stock prices
 * are strictly increasing for those months. Given the stock prices of the company for n months and the analysis parameter k, find the number
 * of highly profitable months.
 * 
 * Example:
 * 
 * stockPrices = [5,3,5,7,8]
 * k = 3
 * 
 * Answer is 2 because [3,5,7] and [5,7,8]
 */

const highlyProfitableMonths = (arr, k) => {
  let left = 0;
  let months = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      if (i - left + 1 === k) {
        months++;
        left++;
      }
    } else {
      left = i;
    }
  }

  return months;
}

const highlyProfitableMonthsArray = (arr, k) => {
  let left = 0;
  let monthsArray = 0;
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {

    if (arr[i] > arr[i - 1]) {
      if (i - left + 1 === k) {
        months++;
        left++;
      }
    } else {
      left = i;
    }
  }

  return months;
}

console.log(highlyProfitableMonths([5,3,5,7,8], 3));
console.log(highlyProfitableMonths([2,4,3,6,2,4,6,7,6], 2));

/**
 * Intial thoughts:
 * 
 * Partitions and subarrays are of k length. Loop thru array of k size and for each subarray, check if values are strictly increasing
 * 
 * 5 3 5
 *   3 5 7
 *     5 7 8
 * 
 * If the next value is less than current and current solution length < k, we no longer consider it as a possible solution.
 * 
 * arr = [5,3,5,7,6,8,10], k = 3
 * 
 * Brute force, we consider all combinations of k, at most n-k+1 solutions
 * 
 * There's extraneous calculations because in the example above, you have the following:
 * 
 * 5,7,6
 *   7,6,8
 *     6,8,10
 * 
 * We know that in the first partition, we have 6 at the end there. We don't need to calculate the middle partition because we know 7 > 6
 * Thus I'm thinking we can just skip to 6, and check the new partition(s) from that step onwards
 * 
 * 
 * [3,5,7]
 * 
 * Loop thru array,
 * 
 * if curVal > curVal - 1, then add to subarray
 * When subarray reaches k length, months += 1, then delete the first el in the array
 * 
 * else if curVal < curVal - 1, then scrap the old array and create a new one
 * 
 * In fact, I don't think I need an array, we can have two pointers instead
 * 
 */