var Stack = function() {
  var someInstance = {};

  _.extend(someInstance, stackMethods);
  _.extend(someInstance, stackProperties);

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackProperties = {};

stackProperties.top = 0;
stackProperties.storage = {};

var stackMethods = {};

stackMethods.push = function(value){

}

stackMethods.pop = function(){

}

stackMethods.size= function(){
  return this.top;
}

