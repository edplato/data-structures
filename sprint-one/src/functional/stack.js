var Stack = function() {
  var someInstance = {};

  var size = 0;
  var storage = {};

  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    if (size > 0) {
      let popped = storage[size - 1];
      delete storage[size - 1];
      size--;
      return popped;
    }
  };

  someInstance.size = function() {
    return size;
  };
  return someInstance;
};
