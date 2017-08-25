// Instantiate a new graph
var Graph = function() {
  // creates object on prototype
  this.storage = [];
  // returns this
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var something = { node: node };
  this.storage.push(something);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //should iterate through storage
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].node === node){
      return true;
    }
  }
  return false;
  //should ask if node property === node
};

// Remove node method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
Graph.prototype.removeNode = function(node) {
  //test if graph contains node
  // this.storage = splice new storage or newStorage

  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].node === node) {
      this.storage.splice(i, 1);
    }
  }

  //todo remove edges
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them if they both are present within the graph.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback that traverses through the graph which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


