

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  if (this._storage.get(index) !== undefined) {
    this._storage.each(function(x, y, z) {
      if (x !== undefined) {
        let temp = x[0][0];
        if (temp === k) {
          x[0][1] = v;
        }
      }
    });
    var bucky = this._storage.get(index);
    bucky.push(tuple);
    this._count++;
    // if (this._limit > this._count * 0.75) {
    //   // console.log(this);
    //   var newLimit = this._limit * 2;
    //   this.resize(newLimit);
    // }

  } else {
    var bucket = [tuple];
    this._storage.set(index, bucket);
    this._count++;
    // if (this._limit > this._count * 0.75) {
    //   console.log(this);
    //   var newLimit = this._limit * 2;
    //   this.resize(newLimit);
    // }
  }

  // if (this._limit > this._count * 0.75) {
  //   this.resize(this._limit * 2);
  // }
  return null;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var buckets = this._storage.get(index);

  for (var i = 0; i < buckets.length; i++) {
    if (buckets[i][0] === k) {
      return buckets[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var buckets = this._storage.get(index);

  for (var i = 0; i < buckets.length; i++) {
    if (buckets[i][0] === k) {
      buckets.splice(i, 1);
      this._count--;
    }
  }
  // if (this._limit < this._count * 0.25) {
  //   this.resize(this._limit / 2);
  // }
};

HashTable.prototype.resize = function(newSize) {
  //copy storage
  var oldStorage = this._storage;

  this._limit = newSize;
  this._storage = LimitedArray(newSize);
  this._count = 0;

  //console.log(this._storage, buckets);
  oldStorage.each(function(bucket) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));



};

/*
 * Complexity: What is the time complexity of the above functions?
 */