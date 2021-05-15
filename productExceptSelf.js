/*
productExceptSelf.js
---
PROMPT
---
Given an array nums of n integers where n > 1, return an array output such
that output[i] is equal to the product of all the elements of nums except nums[i].
Try to solve it with constant space complexity. (Output array does not count as
extra space in complexity analysis.)
---
EXAMPLES
---
Input:  [1,2,3,4]
Output: [24,12,8,6]
Input: [2,0,13]
Output: [0,26,0]
---
CONSTRAINTS
---
Please solve it without division and in O(n). All products fit into a 32-bit integer.
*/

var productExceptSelf = function(head) {
  let output = [];
  let pre = [];
  let post = [];

  let preProd = 1;
  let postProd = 1;
  for (let i = 0; i < head.length; i++) {
    preProd *= head[i];
    postProd *= head[head.length - i - 1];
    pre[i] = preProd;
    post[head.length - i - 1] = postProd;
  }

  for (let i = 1; i < head.length - 1; i++) {
    output[i] = pre[i - 1] * post[i + 1];
  }

  output[0] = post[1];
  output[head.length - 1] = pre[head.length - 2];

  return output;
};
