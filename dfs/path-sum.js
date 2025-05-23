/**
 * Given the root of a binary tree and an integer targetSum, 
 * return true if the tree has a root-to-leaf path such that adding 
 * up all the values along the path equals targetSum.

  A leaf is a node with no children.

  Example 1:
    Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
    Output: true
    Explanation: The root-to-leaf path with the target sum is shown.

  Example 2:
    Input: root = [1,2,3], targetSum = 5
    Output: false
    Explanation: There are two root-to-leaf paths in the tree:
    (1 --> 2): The sum is 3.
    (1 --> 3): The sum is 4.
    There is no root-to-leaf path with sum = 5.

  Example 3:
    Input: root = [], targetSum = 0
    Output: false
    Explanation: Since the tree is empty, there are no root-to-leaf paths.

  Constraints:
    The number of nodes in the tree is in the range [0, 5000].
    -1000 <= Node.val <= 1000
    -1000 <= targetSum <= 1000
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * TC = O(n)
 * SC = O(h)
 * @return {boolean}
 */
// DFS + Recursion
function hasPathSum1(root, targetSum) {
  if (root === null) return false;

  if (root.left === null && root.right === null) {
    return targetSum === root.val;
  }

  return (
    hasPathSum1(root.left, targetSum - root.val) ||
    hasPathSum1(root.right, targetSum - root.val)
  );
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * TC = O(n)
 * SC = O(h)
 * @return {boolean}
 */
// DFS + Stack
function hasPathSum2(root, targetSum) {
  if (root === null) return false;

  let stack = [[root, targetSum]];
  while (stack.length !== 0) {
    const [currNode, remainingSum] = stack.pop();
    // Check if current node is a leaf and matches remaining sum
    if (
      currNode.left === null &&
      currNode.right === null &&
      currNode.val === remainingSum
    ) {
      return true;
    }

    // Push children with updated remaining sum (order doesn't matter)
    if (currNode.right !== null) {
      stack.push([currNode.right, remainingSum - currNode.val]);
    }
    if (currNode.left !== null) {
      stack.push([currNode.left, remainingSum - currNode.val]);
    }
  }

  return false;
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * TC = O(n)
 * SC = O(n)
 * @return {boolean}
 */
// BFS
function hasPathSum3(root, targetSum) {
  if (root === null) return false;

  let queue = [[root, targetSum]]; // Assume this to be Queue
  while (queue.length !== 0) {
    const [currNode, remainingSum] = queue.shift();
    // Check if current node is a leaf and matches remaining sum
    if (
      currNode.left === null &&
      currNode.right === null &&
      currNode.val === remainingSum
    ) {
      return true;
    }

    // Push children with updated remaining sum (order doesn't matter)
    if (currNode.right !== null) {
      queue.push([currNode.right, remainingSum - currNode.val]);
    }
    if (currNode.left !== null) {
      queue.push([currNode.left, remainingSum - currNode.val]);
    }
  }

  return false;
}
