

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
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

  } else {
    var bucket = [tuple];
    this._storage.set(index, bucket);
  }
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
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */