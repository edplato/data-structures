var BinarySearchTree = function(value) {
  this.left;// A .left property, a BST where all values are lower than than it the current value.
  this.right;// A .right property, a BST where all values are higher than than it the current value.
  this.value = value;
};

// A .insert() method, which accepts a value and places in the tree in the correct position.
BinarySearchTree.prototype.insert = function(value) {
  //if this > value
  if (this.value > value) {//look to this.left
    if (this.left !== undefined) {
      this.left.insert(value);
    } else {
      var newTree = new BinarySearchTree(value);
      this.left = newTree;
    }
  //if this < value
  } else {//look to this.right
    if (this.right !== undefined) {
      this.right.insert(value);
    } else {
      var newTree = new BinarySearchTree(value);
      this.right = newTree;
    }
  }
};
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
BinarySearchTree.prototype.contains = function(value) {
  // console.log(this);
  if (this.value === value) {
    return true;
  }

  if (this.value > value && this.left !== undefined) {
    return this.left.contains(value);
  } else if(this.value < value && this.right !== undefined) {
    return this.right.contains(value);
  } else {
    return false;
  }
};
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // if left is defined, current node equals left node
  if (this.left !== undefined) {
    console.log(this);
    cb(this.value);
  }

  // cb on current node


};

/*
 * Complexity: What is the time complexity of the above functions?
 */
