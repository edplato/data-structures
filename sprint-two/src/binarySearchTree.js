var BinarySearchTree = function(value) {
  this.left;// A .left property, a BST where all values are lower than than it the current value.
  this.right;// A .right property, a BST where all values are higher than than it the current value.
  this.value = value;
};

// A .insert() method, which accepts a value and places in the tree in the correct position.
BinarySearchTree.prototype.insert = function(value) {
  console.log(this);
  //check if this > value
  //if this > value
  if (this.value > value) {//look to this.left
    if (this.left !== undefined) {
      this.left.insert(value);
    } else {
      var newTree = new BinarySearchTree(value);
      this.left = newTree;
    }
    //if this.left is defined we need to call insert function on this.left with value still value
  } else {
    if (this.right !== undefined) {
      this.right.insert(value);
    } else {
      var newTree = new BinarySearchTree(value);
      this.right = newTree;
    }
  }
  //if this < value look to this.right
};
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
BinarySearchTree.prototype.contains = function(target) {

};
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
BinarySearchTree.prototype.depthFirstLog = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
