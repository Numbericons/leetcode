/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */


var enqueue = function (node, queue) {
  if (node.left) {
    queue.push(node.left);
    queue[queue.length - 1].parent = node;
  }
  if (node.right) {
    queue.push(node.right);
    queue[queue.length - 1].parent = node;
  }
}

var reverseCourse = function(root, tarNode) {
  let directions = [];

  while (tarNode.parent) {
    tarNode.parent.left = tarNode ? directions.unshift('L') : directions.unshift('R');
    tarNode = tarNode.parent;
  }
  return directions;
}

var getNode = function(node,directions) {
  let retNode;
  directions.forEach(dir => retNode = dir === 'R' ? node.right : node.left )

  return retNode;
}

var getTargetCopy = function (original, cloned, target) {
  let queue = [original];
  let tarNode;

  while (queue.length) {
    const node = queue.shift();
    if (node.val === target) {
      tarNode = node;
      break;
    }
    enqueue(node, queue);
  }
  return getNode(cloned, directions);
};


//To return the node within the cloned tree
//  as you are going through original tree, 
        // idea 1: go through cloned the same way
        // idea 2: create a map to traverse within the cloned tree after finished
      //like idea 2, as wont have to create queue etc for cloned tree