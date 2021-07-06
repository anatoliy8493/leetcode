/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  // left - root - right -> DFS in order traversal
  if (root === null) return null;
  
  let head = null;
  let current = null;

  const dfs = node => {
    if (node === null) return;

    dfs(node.left);

    if (head === null) head = node;

    if (current === null) {
      current = node;
    } else {
      current.right = node;
      node.left = current;
    }
    
    current = node;

    dfs(node.right);
  };

  dfs(root);
  
  head.left = current;
  current.right = head;
  
  return head;
};