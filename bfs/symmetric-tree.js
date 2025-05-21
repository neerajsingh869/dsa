import { Queue } from "../utils/queue-class";
import { TreeNode } from "../utils/tree-node";

/**
 * PROBLEM LINK: https://leetcode.com/problems/symmetric-tree/description/
 *
 * Given the root of a binary tree, check whether it is a
 * mirror of itself (i.e., symmetric around its center).
 */

/**
 * @param {TreeNode} root
 * TC = O(n)
 * SC = O(h)
 * @return {boolean}
 */
function isSymmetric1(root) {
  if (root === null) return true;

  return isSymmetric_helper(root.left, root.right);
}

function isSymmetric_helper(root1, root2) {
  if (root1 === null || root2 === null) return root1 === root2;

  return (
    root1.val === root2.val &&
    isSymmetric_helper(root1.left, root2.right) &&
    isSymmetric_helper(root1.right, root2.left)
  )
}

function isLevelSymmetric(levelValues) {
  let i = 0,
    j = levelValues.length - 1;

  while (i <= j) {
    if (levelValues[i] !== levelValues[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

/**
 * @param {TreeNode} root
 * TC = O(n)
 * SC = O(n)
 * @return {boolean}
 */
function isSymmetric2(root) {
  if (root === null) return true;

  let queue = new Queue();
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    const currentLevelSize = queue.size();

    let currentLevelValues = [];
    for (let i = 0; i < currentLevelSize; i++) {
      const currentNode = queue.dequeue();
      currentLevelValues.push(currentNode?.val ?? null);

      if (currentNode === null) continue;

      // `null` need to be stored so that we know the exact level order
      queue.enqueue(currentNode.left);
      queue.enqueue(currentNode.right);
    }

    if (!isLevelSymmetric(currentLevelValues)) return false;
  }

  return true;
}

/**
 * @param {TreeNode} root
 * TC = O(n)
 * SC = O(n)
 * @return {boolean}
 */
function isSymmetric3(root) {
  if (root === null) return true;

  let queue = new Queue();
  queue.enqueue(root.left);
  queue.enqueue(root.right);
  while (!queue.isEmpty()) {
    const leftNode = queue.dequeue();
    const rightNode = queue.dequeue();

    if (leftNode === null && rightNode === null) continue;

    if (
      leftNode === null ||
      rightNode === null ||
      leftNode.val !== rightNode.val
    ) {
      return false;
    }

    queue.enqueue(leftNode.left);
    queue.enqueue(rightNode.right);
    queue.enqueue(leftNode.right);
    queue.enqueue(rightNode.left);
  }

  return true;
}
