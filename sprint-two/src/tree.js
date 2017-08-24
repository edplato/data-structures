var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // .children property, an array containing a number of subtrees
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
treeMethods.addChild = function(value) {
  let node = new Tree(value);
  this.children.push(node);
  //console.log(node);
};

// A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
