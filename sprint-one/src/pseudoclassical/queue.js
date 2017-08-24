var Queue = function() {
  this.storage = {};
  this.first = 0;
  this.last = 0;
};

Queue.prototype.enqueue = function (value) {

};

Queue.prototype.dequeue = function () {

};

Queue.prototype.size = function () {
  return this.first - this.last;
};


