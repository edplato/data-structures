var Stack = function() {
  var someInstance = {};
  someInstance.top = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

stackMethods.pop = function() {
  if (this.top > 0) {
    let popped = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top--;
    return popped;
  }
};

stackMethods.size = function() {
  return this.top;
};