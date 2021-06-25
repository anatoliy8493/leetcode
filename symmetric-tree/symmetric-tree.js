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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const dfs = (p, q) => {
    if (p === null || q === null) return p === q;
    
    return p.val === q.val && dfs(p.right, q.left) && dfs(p.left, q.right);
  }
  
  return dfs(root, root);
};