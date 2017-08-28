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
    let popped = this.storage[this.top];
    delete this.storage[this.top];
    return popped;
  }
};

stackMethods.size = function() {
  return this.top;
};