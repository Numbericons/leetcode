
// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

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

var reverseCourse = function(tarNode) {
  let directions = [];

  while (tarNode.parent) {
    tarNode.parent.left === tarNode ? directions.unshift('L') : directions.unshift('R');
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
  if (original === target) return cloned;
  let queue = [original];
  let tarNode;

  while (queue.length) {
    const node = queue.shift();
    if (node === target) {
      tarNode = node;
      break;
    }
    enqueue(node, queue);
  }
  return getNode(cloned, reverseCourse(tarNode));
};

// const original = new TreeNode(7);
// original.left = new TreeNode(4);
// original.right = new TreeNode(3);
// original.right.left = new TreeNode(6);
// original.right.right = new TreeNode(19);

// const clone = new TreeNode(7);
// clone.left = new TreeNode(4);
// clone.right = new TreeNode(3);
// clone.right.left = new TreeNode(6);
// clone.right.right = new TreeNode(19);


// [8, null, 6, null, 5, null, 4, null, 3, null, 2, null, 1]

const original = new TreeNode(8);
original.right = new TreeNode(6);
original.right.right = new TreeNode(5);
original.right.right.right = new TreeNode(4);
original.right.right.right.right = new TreeNode(3);
original.right.right.right.right.right = new TreeNode(2);
original.right.right.right.right.right.right = new TreeNode(1);

const clone = new TreeNode(8);
clone.right = new TreeNode(6);
clone.right.right = new TreeNode(5);
clone.right.right.right = new TreeNode(4);
clone.right.right.right.right = new TreeNode(3);
clone.right.right.right.right.right = new TreeNode(2);
clone.right.right.right.right.right.right = new TreeNode(1);

getTargetCopy(original, clone, original.right)

//To return the node within the cloned tree
//  as you are going through original tree, 
        // idea 1: go through cloned the same way
        // idea 2: create a map to traverse within the cloned tree after finished
      //like idea 2, as wont have to create queue etc for cloned tree