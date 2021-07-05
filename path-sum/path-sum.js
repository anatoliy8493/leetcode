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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {  
  const bfs = (node, acc = 0) => {
    if (node === null) return 0;
    if (node.left === null && node.right === null) return node.val + acc === sum;
    
    return bfs(node.left, acc + node.val) || bfs(node.right, acc + node.val);
  };
  
  return bfs(root);
};