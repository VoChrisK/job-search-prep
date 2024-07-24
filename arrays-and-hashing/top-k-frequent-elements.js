var topKFrequent = function(nums, k) {
  let count = {}


  nums.forEach((num) => {
      if (num in count) {
          Count[num]++;
      } else {
          count[num] = 1;
      }
  });


  let arr = new Array(nums.length);
 
  Object.entries(count).forEach((entry) => {
      let idx = entry[1];


      if (arr[idx]) {
          arr[idx].push(entry[0]);dail
      } else {
          arr[idx] = [entry[0]];
      }
  })


  let res = [];


  for(let i = arr.length - 1; i > 0; i--) {
      if (arr[i]) {
          for(let j = 0; j < arr[i].length; j++) {
              res.push(arr[i][j]);
              if (res.length === k) {
                  return res;
              }
          }
      }
  }
};
