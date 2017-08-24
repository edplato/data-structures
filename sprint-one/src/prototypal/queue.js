var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.first = 0;
  someInstance.last = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.first] = value;
  this.first ++;
};

queueMethods.dequeue = function() {
  if (this.first - this.last > 0) {
    let dequeuer = this.storage[this.last];
    delete this.storage[this.last];
    this.last ++;
    return dequeuer;
  }
};

queueMethods.size = function() {
  return this.first - this.last;
};