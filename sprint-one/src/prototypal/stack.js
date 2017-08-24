var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.top = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){

}

stackMethods.pop = function(){

}

stackMethods.size = function(){
  return this.top;
}


