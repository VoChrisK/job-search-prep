/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let max = 0;

  while(right < s.length) {
      let rightChar = s.charAt(right);

      while (set.has(rightChar) && left < right) {
          let leftChar = s.charAt(left);
          set.delete(leftChar);
          left++;
      }
      
      max = Math.max(max, right - left + 1);
      set.add(rightChar)
      right++;
  }
  
  return max;
};

/**
  pwwkew

  

  left = 0
  right = 0

  move right pointer until we hit a dupe character.
  once we hit a dupe character:

  - move left pointer and remove characters from set, until we have no more dupes. but only dupes from the
  charater that the right pointer is currently pointing to.

  without repeating characters ===> set or hashmap
*/