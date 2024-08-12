/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];


  const phone = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
  const res = [];


  recursion(phone, Number(digits.charAt(0)), digits, '', res);


  return res;
};


const recursion = (phone, digit, digits, combo, res) => {
  if (digits.length === 0) {
      res.push(combo);
      return;
  }


  let letters = phone[digit];
  digits = digits.slice(1);


  for(let i = 0; i < letters.length; i++) {
      let letter = letters.charAt(i);
      combo = combo.concat(letter);
      recursion(phone, Number(digits.charAt(0)), digits, combo, res);
      combo = combo.slice(0, -1);
  }
}


/**
  create an array of letters and indices are digits


  ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']


  for each digit in digits, loop thru each letter combination,
  then recursively call the same function with the next digit in digits,
  get all combinations for the next digit, rinse and repeat
*/
