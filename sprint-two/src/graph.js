// Instantiate a new graph
var Graph = function() {
  // creates object on prototype
  this.nodes = [];
  this.edges = [];
  // returns this
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.contains(node)) {
    return;
  }
  var newNode = { node: node };
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //call forEachNode
  var result = false;
  this.forEachNode(function(elem){
    if (elem === node) {
      result = true;
    }
  });
  return result;
};

//Graph.prototype.index = function TO BE CONTINUED....

// Remove node method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
Graph.prototype.removeNode = function(node) {
  //test if graph contains node
  // this.nodes = splice new nodes or newnodes

  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].node === node) {
      this.nodes.splice(i, 1);
      return;
    }
  }

  //todo remove edges
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //node object property fromEdges.length > 0
  //


};

// Connects two nodes in a graph by adding an edge between them if they both are present within the graph.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //fromEdges gets property toEdges[]
  //toEdges is pushed toNode
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.edges.push([fromNode, toNode]);
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //conditional: does the edge exist?
  //splice from appropriate property in each node
};

// Pass in a callback that traverses through the graph which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(item) {
    cb(item.node);
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


