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
};

// A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {

  var result = false;
  var checkIt = function(tree, target) {
    if (tree.value === target) {
      result = true;
    }

    if(tree.children.length > 0) {
      for(var i = 0; i < tree.children.length; i++) {
        checkIt(tree.children[i], target);
      }
    }
  };
  checkIt(this, target);
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */