var enqueue = function (node, queue)  {
  if (node.left) {
    queue.push(node.left);
    queue[queue.length - 1].parent = node;
  }
  if (node.right) {
    queue.push(node.right);
    queue[queue.length - 1].parent = node;
  }
}

var sumEvenGrandparent = function (root) {
  let queue = [root];
  let sum = 0;

  while (queue.length) {
    const node = queue.shift();
    const parent = node.parent;
    const grandparent = parent ? parent.parent : null;
    if (grandparent && grandparent.val % 2 === 0) sum += node.val;

    enqueue(node, queue);
    // if (node.right) {
    //   queue.push(node.right);
    //   queue[queue.length - 1].parent = node;
    // }
    // if (node.left) {
    //   queue.push(node.left);
    //   queue[queue.length - 1].parent = node;
    // }
  }
  return sum;
};

//make a queue