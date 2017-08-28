var Stack = function() {
  this.storage = {};
  this.top = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

Stack.prototype.pop = function() {
  if (this.top > 0) {
    this.top--;
    let popped = this.storage[this.top];
    delete this.storage[this.top];
    return popped;
  }
};

Stack.prototype.size = function() {
  return this.top;
};
