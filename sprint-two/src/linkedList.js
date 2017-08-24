var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (!list.head) {
      list.head = newNode;
    }
    //should ask if there is already a tail
    if (list.tail) {
      //should change 'next' property of that tail
      list.tail.next = newNode;
    }
    //should make newNode the list.tail
    list.tail = newNode;
  };

  list.removeHead = function() {
    if (list.head) {
      let currentHead = list.head;
      delete list.head;
      list.head = currentHead.next;
      return currentHead.value;
    }
  };

  list.contains = function(target) {
    var result = false;
    _.each(list, function(elem){
      if (elem.value === target) {
        result = true;
      }
    });
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

 addToTail: O(1)
 removeHead: O(1)
 contains: O(n)

 */
