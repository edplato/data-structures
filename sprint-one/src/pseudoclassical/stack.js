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
    return this.storage[this.top];
  }
};

Stack.prototype.size = function() {
  return this.top;
};
