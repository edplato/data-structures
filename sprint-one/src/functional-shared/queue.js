var Queue = function() {
  var someInstance = {};
  someInstance.front = 0;
  someInstance.back = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

queueMethods.dequeue = function() {
  if (this.back - this.front > 0) {
    let dequeued = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return dequeued;
  }
};

queueMethods.size = function() {
  return this.back - this.front;
};