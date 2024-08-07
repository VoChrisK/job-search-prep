/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let maxSub = "";

  for(let i = 0; i < s.length; i++) {
      let sub1 = isPalindrome(s, i, i);

      if (sub1.length > maxSub.length) {
          maxSub = sub1;
      } 

      let sub2 = isPalindrome(s, i, i + 1);
      
      if (sub2.length > maxSub.length) {
          maxSub = sub2;
      }
  }

  return maxSub;
};

const isPalindrome = (s, left, right) => {
  let palindrome = "";

  while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      palindrome = s.substring(left, right + 1);
      left--;
      right++;
  }

  return palindrome;
}

/**
  babad

  [
      baba,
      aba,
      ba,
      a
  ]

  initial thoughts:

  - array of substrings

  - each iteration in loop:
      - add current char to each element in array
      - go thru each el in array and check if palindrome

  - check for all substrings in the original string
      - keep track of all substrings
  - check if a substring is a palindrome

  - array, hashmap


  better solution:

  go thru each char in string, and expand on it using two pointers,
  continuously check if it's a substring
  this way, we don't need to check the entire substring if it's a palindrome or not
  we still need to check all possible substrings though

  consider two cases:

  aba
  abba
*/