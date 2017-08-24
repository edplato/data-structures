var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var newFront = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if(size - newFront > 0){
      let dequeued = storage[newFront];
      delete storage[newFront];
      newFront++;
      return dequeued;
    }
  };

  someInstance.size = function() {
    return size - newFront;
  };
  return someInstance;
};