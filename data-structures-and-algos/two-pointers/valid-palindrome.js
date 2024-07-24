// time - o(n) - loop thru str once, + half the str in while loop
// space - o(n) - length of str + some const vars created
var isPalindrome = function(s) {
   let str = s.split('')
   str = str.map(char => {
       if (!char.match(/[A-Za-z0-9]/g)) return ''  // A-z includes underscore, so do A-Za-z
       return char.toLowerCase()
   })
   str = str.join('')


   let left = 0
   let right = str.length-1
   // while (left !== Math.floor(str.length/2)) { instead of calculating idx, this is much more simple
   while (left < right) {
       if (str.charAt((left)) !== str.charAt(right)) return false
       else {
           left++
           right--
       }
   }


   return true
};
// r a c e c a r
// r a c c a r
// remove non alpha numreic, and convert upper to lowercase
// left ptr at the beginning, right pointer at end of str
// if char at left === chart at right -- keep going, else return false
