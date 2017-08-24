var Queue = function() {
  this.storage = {};
  this.first = 0;
  this.last = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.first] = value;
  this.first ++;
};

Queue.prototype.dequeue = function () {
  if (this.first - this.last > 0) {
    let dequeuer = this.storage[this.last];
    delete this.storage[this.last];
    this.last ++;
    return dequeuer;
  }
};

Queue.prototype.size = function () {
  return this.first - this.last;
};