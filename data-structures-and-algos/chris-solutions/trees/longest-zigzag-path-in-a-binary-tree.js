 // 1/30/2024 solution
 
 /**
    - Current node has to go either left or right because there's a possibility that one can lead to the longest path
    - We still need to maintain alternating between left or right,
    - We go left or right depending on the flag, and we need to start a new count for the opposite path
    - Maybe as we bubble back up, we take the other path, **we count as we traverse down**
  */


    var longestZigZag = function(root) {
      let leftCount = zigzag(root.left, true, 0);
      let rightCount = zigzag(root.right, false, 0);
  
  
      return Math.max(leftCount, rightCount);
  };
  
  
  function zigzag(root, goRightFlag, count) {
      if (root === null) return count;
  
  
      let zigzagCount = 0;
      let newPathCount = 0;
  
  
      if (goRightFlag) {
          zigzagCount = zigzag(root.right, false, count + 1);
          newPathCount = zigzag(root.left, true, 0);
      } else {
          zigzagCount = zigzag(root.left, true, count + 1);
          newPathCount = zigzag(root.right, false, 0);
      }
  
  
      return Math.max(zigzagCount, newPathCount);
  }
  
  
  // brute force: check every node in tree and find all possible zigzag path --- TLE
  // time complexity: O(2^n) ?
  // function dfs(root) {
  //     if (root === null) return 0;
  
  
  //     let count1 = zigzag(root, true) - 1;
  //     let count2 = zigzag(root, false) - 1;
  //     let maxCount = Math.max(count1, count2);
  
  
  //     let leftCount = dfs(root.left);
  //     let rightCount = dfs(root.right);
  
  
  //     return Math.max(leftCount, rightCount, maxCount);
  // }
  