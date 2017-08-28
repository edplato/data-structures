// FIFO - first in first out
// visualize a line at an atm

var Queue = function() {
  var someInstance = {};
  // storage contains values
  var storage = {};
  // front will be used as key for value reference in storage
  // since a queue is FIFO, values are removed from the front
  // front will increment by one with every removal in order to reference the new front
  var front = 0;
  // back and front will be the same to start, but with every added value, the back is incremented by one
  // back is necessary in order to know what values are in front
  // back is also needed to determine the size of the queue even after the front may have changed
  var back = 0;

  // add a value to the back of the queue using the back as a key and input as value
  // increment back in order to keep track of queue size
  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
  };

  // remove a value only if back(the current key of the end of the queue) and front(the current key at the front)
  // are greater than zero - is necessary in order to not dequeue key/value pairs that are not there since
  // no specific key is getting targeted ... it's just 'remove whatever key/value pair is in the front'
  someInstance.dequeue = function() {
    if (back - front > 0) {
      // deleting may not be required due to garbage collection handling unreferenced objects, but good practice
      // make variable with the value of the current front and then delete the key/value pair from the object
      let dequeued = storage[front];
      delete storage[front];
      // increment front because the old front just got deleted
      front++;
      // return the variable with the value of the old front that just got deleted
      return dequeued;
    }
  };

  // get size of queue by taking the back (newest enqueue key) - front (oldest enqueue)
  someInstance.size = function() {
    return back - front;
  };
  return someInstance;
};