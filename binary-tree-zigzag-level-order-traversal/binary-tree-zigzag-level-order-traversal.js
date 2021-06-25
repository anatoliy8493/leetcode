/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const levels = [];
  
  if (root === null) return levels;
  
  const queue = [root];
  
  while (queue.length > 0) {
    let size = queue.length;
    const level = [];
    
    while (size > 0) {
      const top = queue.shift();
      
      level.push(top.val);
      
      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);
      
      size -= 1;
    }
    
    levels.push(level);
  }
  
  return levels.map((level, index) => index % 2 === 0 ? level : level.reverse());
};