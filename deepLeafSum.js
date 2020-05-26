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
 * @return {number}
 */
var enqueue = function (node, queue, level) {
  if (node.left) {
    queue.push(node.left);
    queue[queue.length - 1].parent = node;
    queue[queue.length - 1].level = node.level + 1;
  }
  if (node.right) {
    queue.push(node.right);
    queue[queue.length - 1].parent = node;
    queue[queue.length - 1].level = node.level + 1;
  }
}

var deepestLeavesSum = function (root) {
  root.level = 1;
  let queue = [root];
  let sum = {};

  while (queue.length) {
    const node = queue.shift();
    if (!node.left && !node.right) {
      sum[node.level] ? sum[node.level] += node.val : sum[node.level] = node.val;
    }
    enqueue(node, queue, node.level);
  }
  return sum[Math.max(...Object.keys(sum))];
};