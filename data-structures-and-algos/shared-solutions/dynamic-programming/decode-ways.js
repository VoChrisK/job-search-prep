/**
 * @param {string} s
 * @return {number}
 */
// time - o(n) where n is length of s
// space - o(n) where n is length of s
var numDecodings = function(s) {
  let dp = new Array(s.length)

  // first dig (going right to left) -- can probs be simplified
  if (s.charAt(s.length-1) === "0") dp[s.length-1] = 0
  else dp[s.length-1] = 1

  // last 2 dig -- can probs be simplified
  let num = s.charAt(s.length-2) + s.charAt(s.length-1)
  if (s.charAt(s.length-2) === "0") dp[s.length-2] = 0
  else if (Number(num) > 26 && s.charAt(s.length-1) === "0") dp[s.length-2] = 0
  else if (num === "10" || num === "20") dp[s.length-2] = 1
  else if (Number(num) > 26) dp[s.length-2] = 1
  else dp[s.length-2] = 2

  for (let i=s.length-3; i>=0; i--) {
      let num = s.charAt(i) + s.charAt(i+1)
      if (s.charAt(i) === "0") dp[i] = 0
      else if (Number(num) <= 26 ) {
          dp[i] = dp[i+1] + dp[i+2] // num ways is numWaysTake1Dig + numWaysTake2Dig (but can only take 2 if <= 26)
      } else {
          dp[i] = dp[i+1]
      }
  }

  return dp[0]
};
/**
  
  21172 
  if first2 (21) <=26 then we can take sum of i-1 and i-2
  [1,1,2,3,5]
  2,1,1,7,2 or 2,11,7,2 or 2,1,17,2, or 21,1,7,2 or 21,17,2
  [,2,1,1]

  if current digit is 0 then 0
  else if 1 digit - then it's 1
  else if 2 digits
      if > 26 return 1
      else if it's 10 or 20 -> 1
      else if < 26 --> 2
*/

/**
  if num starts with a "0" return 0
  if num > 26 return 0
  if only 1 dig left and it's not a 0, return 1 (only 1 way to decode)
  if 2 digits and 1 <= num <= 26, return 1
  look at first digit call recursive func
  call recursive function with i+1 (2nd digit)
*/
/**
  options - 1 dig or 2 dig
  if we take 2 digits - it has to be <= 26, and it can't start with a 0
  if we take 1 digt - it can't be a 0
                                  11106
                  1, 1106                     11, 106
      1, 106       11, 06                   1, 06      10, 6
  1, 06. 10, 6         X                      X           6, []
      X   6, []

  1 1 10 6
  11 10 6

  going from right to left with 11106
  [1,0,1,1,2]

  31012
  [1,2,0,2,2]

  31130
  [0,0]

  31110
  [0,1]

  31112
  [1,2]

  31172 -172 -17,2 --> 1,7,2
  [1,1,2,3,3]
  11,7,2 or 1,1,7,2, or 1,17,2
  3,1,1,7,2 or 3,11,7,2 or 3,1,17,2 

  21172 
  if first2 (21) <=26 then we can take sum of i-1 and i-2
  [1,1,2,3,5]
  2,1,1,7,2 or 2,11,7,2 or 2,1,17,2, or 21,1,7,2 or 21,17,2

  if current digit is 0 then 0
  else if 1 digit - then it's 1
  else if 2 digits
      if > 26 return 1
      else if it's 10 or 20 -> 1
      else if < 26 --> 2
      

  total num of ways = num of ways if i took 1 dig + num of ways if i took 2 dig
  a[i] = a[i-1] + a[i-2]
  if s starts with "0" then there are 0 ways


                          11106
                  1, 1106                     11, 106
      1, 106       11, 06                   1, 06      10, 6
  1, 06. 10, 6         X                      X           6, []
      X  6, []

                          11106
              1            +              1     
          1       0                           1   
      0     1                             0       1
  

  if num starts with a "0" return 0
  if num > 26 return 0
  if only 1 dig left and it's not a 0, return 1 (only 1 way to decode)
  if 2 digits and 1 <= num <= 26, return 1

                          31106 --> 1+0 = 1
              3- 1106 --> 1+0 = 1                        31 - return 0
      1- 106 -> 1           11- 06 --> 0
  1- 06 -> 0  10 -6 -> 1           start with 0, hit base return 0  
st w 0, return 0 |  only 1 digit return 1


          22 --> 1+1 = 2
      2 -> 1       22 -> 1

          20 --> 1
      2- 0 --> 0            20 ->1
          return 0        

      0.   1.      2
  [0, 1 or 0, 1 or 2]
   11106
   [0, 1, 2]

   31106
   [0, 1, 1, 2, 3]
   char 3 -looking at 311 - i said 2 ways: 3,1,1 or 3,11
   
   when i look at char 4
   char 4 - 3110- 3 ways: 3,1,10 ---> only 1 way

  {
      106: 1
  }

  numWay[11106] = numWays[1] + numWays[1106] --> 1 + 2 --> 3
  numWays[1106] = numWAys[1] + numWays[106] --> 2
                          1 + 1
*/