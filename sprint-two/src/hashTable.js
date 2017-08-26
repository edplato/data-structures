

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  console.log('You inserted ' + k + ' and ' + v);
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];

  // console.log(this._storage.get(index) !== undefined);

  if (this._storage.get(index) !== undefined) {
    this._storage.each(function(x,y,z) {
      if(x !== undefined){
        let temp = x[0][0];
        console.log(x[0][0], k);
        if(temp === k){
          console.log(x[0][1]);
          x[0][1] = v;
        }
      }
    });
    var bucky = this._storage.get(index);///in an  if
    bucky.push(tuple);

  } else {
    var bucket = [tuple];
    this._storage.set(index, bucket);

  }

  // not undefined at index

  // search through bucket using each

  // if key is in bucket, then return relavent values


  // use return values if any to push to existing bucket with new tuple
  // or overwrite tuple by assignment




  // else if (this._storage.each(function(x,y,z) {
  //   if (x !== undefined) {
  //   console.log('x: ' + x + ' y: ' + y + ' k: ' + k);
  //   console.log(x.length);
  //   /*if (x[0] === k) {
  //     console.log('PASSSSSSSS');
  //     bucketIndex = y;
  //     return true;
  //   }*/
  //   }
  // })) {

  // }
  //conditional on .each callback tests if k ===z


  // this._storage.each(function(x,y,z) { console.log(z)});
  //if (k === this._storage.get(index)[0]){
  //console.log('Allow to overwrite');
  //}
  // var tuple = [k,v];
  // this._storage.set(index, tuple);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //loop through buckets at index
  return this._storage.get(index)[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.splice(index, 1);
  var elem = this._storage.get(index);
  //this._storage.each(function(x,y,z) { console.log(z)});

  //get element from storage at index

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


