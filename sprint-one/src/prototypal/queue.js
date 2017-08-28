var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.front = 0;
  someInstance.back = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back ++;
};

queueMethods.dequeue = function() {
  if (this.back - this.front > 0) {
    let dequeuer = this.storage[this.front];
    delete this.storage[this.front];
    this.front ++;
    return dequeuer;
  }
};

queueMethods.size = function() {
  return this.back - this.front;
};