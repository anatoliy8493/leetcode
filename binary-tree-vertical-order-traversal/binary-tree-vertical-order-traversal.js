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
var verticalOrder = function(root) {
  if (root === null) return [];
  
  const queue = [{
    node: root,
    column: 0,
  }];
  const map = {};

  while (queue.length > 0) {
    let size = queue.length;

    while (size > 0) {
      const {node, column} = queue.shift();

      if (map[column] !== undefined) {
        map[column].push(node.val);
      } else {
        map[column] = [node.val];
      }

      if (node.left) queue.push({node: node.left, column: column - 1});
      if (node.right) queue.push({node: node.right, column: column + 1});

      size -= 1;
    }
  }

  return Object.entries(map).sort((a, b) => a[0] - b[0]).map(item => item[1]);
};