/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {}


  strs.forEach((str) => {
      let sorted = str.split("").sort().join("");


      if (sorted in map) {
          map[sorted].push(str);
      } else {
          map[sorted] = [str]
      }
  });


  let res = [];


  Object.values(map).forEach((arr) => res.push(arr));


  return res;
};
