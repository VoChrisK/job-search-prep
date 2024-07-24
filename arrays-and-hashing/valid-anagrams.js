// Time: O(n)
// Space: O(n)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let hashmap = {};
 
  if (s.length !== t.length) return false;
 
  for(let i = 0; i < s.length; i++) {
      if (s.charAt(i) in hashmap) {
          hashmap[s.charAt(i)]++;
      } else {
          hashmap[s.charAt(i)] = 1;
      }
  }
 
  for(let i = 0; i < t.length; i++) {
      if (t.charAt(i) in hashmap) {
          hashmap[t.charAt(i)]--;
         
          if (hashmap[t.charAt(i)] < 0) return false;
          if (hashmap[t.charAt(i)] === 0) delete hashmap[t.charAt(i)];
      } else {
          return false;
      }
  }
 
  return Object.entries(hashmap).length === 0;
};
