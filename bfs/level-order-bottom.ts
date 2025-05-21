import { TreeNode } from "../utils/tree-node";

/**
 * PROBLEM LINK: https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 * 
 * Given the root of a binary tree, return the bottom-up level order 
 * traversal of its nodes' values. (i.e., from left to right, level 
 * by level from leaf to root).

  Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: [[15,7],[9,20],[3]]

  Example 2:
    Input: root = [1]
    Output: [[1]]

  Example 3:
    Input: root = []
    Output: []

  Constraints:
    The number of nodes in the tree is in the range [0, 2000].
    -1000 <= Node.val <= 1000
 */

/**
 * @param root
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
function levelOrderBottom1(root: TreeNode<number> | null): number[][] {
  let output: number[][] = [];

  // Recursive function to construct level order of tree
  // from Bottom (Making use of closure to write function)
  function levelOrderBottom_helper(
    root: TreeNode<number> | null,
    level: number
  ) {
    if (root === null) {
      return [];
    }

    if (level > output.length) {
      // There is no array to store nodes for
      // current level, so we just create one
      output.push([]);
    }

    // Push root value in it's correct position
    // i.e at (level - 1) index
    output[level - 1].push(root.val);

    // Call the function recursively on left subtree
    // and right subtree and pass the level that it
    // will use to store nodes at correct position
    levelOrderBottom_helper(root.left, level + 1);
    levelOrderBottom_helper(root.right, level + 1);
  }

  // Current level is 1
  levelOrderBottom_helper(root, 1);

  return output.reverse();
}

/**
 * @param root
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
function levelOrderBottom2(root: TreeNode<number> | null): number[][] {
  if (root === null) {
    return [];
  }

  let output: number[][] = [];
  let currentLevel: number[] = [];
  let queue: (TreeNode<number> | null)[] = [];
  queue.push(root);
  queue.push(null);
  while (queue.length !== 0) {
    const currentNode = queue.shift() as TreeNode<number> | null;

    if (currentNode === null) {
      output.push(currentLevel);
      currentLevel = [];

      if (queue.length === 0) {
        break;
      }

      queue.push(null);
    } else {
      currentLevel.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }

  return output.reverse();
}

/**
 * @param root
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
// Better approach than previous one
function levelOrderBottom3(root: TreeNode<number> | null): number[][] {
  if (root === null) {
    return [];
  }

  let output: number[][] = [];
  let currentLevel: number[] = [];
  let queue: TreeNode<number>[] = [];
  queue.push(root);

  while (queue.length !== 0) {
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const currentNode = queue.shift() as TreeNode<number>;

      currentLevel.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    output.push(currentLevel);
    currentLevel = [];
  }

  return output.reverse();
}
