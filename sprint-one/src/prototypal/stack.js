var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.top = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

stackMethods.pop = function() {
  if (this.top > 0) {
    this.top--;
    return this.storage[this.top];
  }
};

stackMethods.size = function() {
  return this.top;
};