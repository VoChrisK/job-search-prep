// time - o(target*coins) --> where coins and target are const --> o(1) since we know values
// space - o(target)
function coinChange(coins: number[], target: number): number {
  let dp = new Array(target+1).fill(target+1)
  dp[0] = 0
  for (let i=1; i<dp.length; i++) {
      for (let j=0; j<coins.length; j++) {
          if (i - coins[j] >= 0) {
              let numCoins = 1 + dp[i - coins[j]]
              dp[i] = Math.min(dp[i], numCoins)
          }
      }
  }


  return dp[dp.length-1] < target+1 ? dp[dp.length-1] : -1
};
/*
  when wer're going thru the list of coins, we have option to take coin or not take it
  if we take it, target decreases by coin amt, numCoins inc +1


  can't do greedy cuz example:
  [4,5] targ = 8
  take 5, 3 left - can't take any coins


                                                          11
  c=1     1 -> 10                                   2-> 9                                   5 -> 6
  c=2     1 -> 9   2->8   5->5               1->8 2->7 5->4                               1->5   2->4   5->1
                                                                          1->4 2->3 5->0
 
  numCoins = 1 coin that i take + numCoins(previouslyTaken)
                                  minimum of the diff options numCoins(amountLeft = curAmount - coinValue)
 
  targ = 11, then arr.length = 11
  for this arr, the idx is the targetVal
 
  numCoins = [0,1,1,2,2,1,2,_,_,_,_,_]
  targ = 3
  1 -> 2      2 -> 1.          5


take min of the options
  take the 1
  numCoins = 1 + arr[2] = 2
  numCoins = 1 + arr[curTarget - valueOfCoinTaken]


  tkae the 2
  num = 1 + arr[1] b/c 3-2=1 --> 1+1=2


  can'ttake 5 cuz targ - coinVal is negative
  take the 5
  num = 1


  targ = 4
  take 1
  num = 1 + arr[4-1] -> 3 coins
  take 2
  num = 1 + arr[4-2] -> 2 coins
  take 5 - can't take 5


  targ = 5
  take 5
  num = 1 + arr[5-5] => 1+0 = 1
*/
