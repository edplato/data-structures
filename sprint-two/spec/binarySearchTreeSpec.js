describe('binarySearchTree', function() {
  var binarySearchTree;
  var highValueBST;

  beforeEach(function() {
    highValueBST = new BinarySearchTree(15);
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should insert a massive of values at the correct location in the tree', function() {
    highValueBST.insert(2);
    highValueBST.insert(3);
    highValueBST.insert(7);
    highValueBST.insert(6);
    highValueBST.insert(1);
    highValueBST.insert(4);
    highValueBST.insert(23);
    highValueBST.insert(16);
    highValueBST.insert(12);
    highValueBST.insert(31);
    highValueBST.insert(5);
    highValueBST.insert(63);
    expect(highValueBST.left.right.value).to.equal(3);
    expect(highValueBST.left.right.right.right.value).to.equal(12);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });
});
