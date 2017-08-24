var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.first = 0;
  someInstance.last = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {

};

queueMethods.dequeue = function() {

};

queueMethods.size = function() {
  return this.first - this.last;
};


