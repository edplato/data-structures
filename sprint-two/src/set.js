var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  console.log(this);
  this.storage.push(item);
  console.log(this.storage);
};

setPrototype.contains = function(item) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this.storage.contains(item)) {
    for (var i = 0; i < this.storage.length; i++) {
      this.storage.splice(i, 1);
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
