import { Queue } from "../utils/queue-class";
import { TreeNode } from "../utils/tree-node";

/**
 * PROBLEM LINK: https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 * 
 * Given a binary tree, find its minimum depth.

  The minimum depth is the number of nodes along the shortest path from 
  the root node down to the nearest leaf node.

  Note: A leaf is a node with no children.

  Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: 2

  Example 2:
    Input: root = [2,null,3,null,4,null,5,null,6]
    Output: 5
  
  Constraints:
    The number of nodes in the tree is in the range [0, 105].
    -1000 <= Node.val <= 1000
 */

/**
 * @param root 
 * TC = O(n)
 * SC = O(h)
 * @returns 
 */
function minDepth1(root: TreeNode<number> | null): number {
  // Base case
  if (root === null) return 0;

  // If current node is leaf node, return 1
  if (root.left === null && root.right === null) return 1;

  const minDepthLeft = minDepth1(root.left);
  const minDepthRight = minDepth1(root.right);

  // There must be at least one leaf node
  if (minDepthLeft === 0 || minDepthRight === 0) {
    return 1 + Math.max(minDepthLeft, minDepthRight);
  } else {
    return 1 + Math.min(minDepthLeft, minDepthRight);
  }
}

/**
 * @param root 
 * TC = O(n)
 * SC = O(h)
 * @returns 
 */
function minDepth2(root: TreeNode<number> | null): number {
  // Base case
  if (root === null) return 0;

  const minDepthLeft = minDepth2(root.left);
  const minDepthRight = minDepth2(root.right);

  // There must be at least one leaf node
  if (minDepthLeft === 0 || minDepthRight === 0) {
    return 1 + Math.max(minDepthLeft, minDepthRight);
  } else {
    return 1 + Math.min(minDepthLeft, minDepthRight);
  }
}

/**
 * @param root 
 * TC = O(n)
 * SC = O(n)
 * @returns 
 */
function minDepth3(root: TreeNode<number> | null): number {
  if (root === null) {
    return 0;
  }

  let queue: (TreeNode<number> | null)[] = [];
  // let queue = new Queue<(TreeNode<number> | null)>();
  queue.push(root);
  queue.push(null);
  let depth = 1;

  while (queue.length !== 0) {
    const currentNode = queue.shift() as (TreeNode<number> | null);

    if (currentNode === null) {
      if (queue.length === 0) {
        break;
      } else {
        depth++;
        queue.push(null);
      }
    } else {
      if (currentNode.left === null && currentNode.right === null) {
        break;
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }

  return depth;
};

/**
 * @param root 
 * TC = O(n)
 * SC = O(n)
 * @returns 
 */
// Best approach
function minDepth4(root: TreeNode<number> | null): number {
  if (root === null) {
    return 0;
  }

  let queue: TreeNode<number>[] = [];
  queue.push(root);
  let depth = 1;

  while (queue.length !== 0) {
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const currentNode = queue.shift() as TreeNode<number>;

      if (currentNode.left === null && currentNode.right === null) {
        return depth;
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    depth++;
  }

  return depth;
};