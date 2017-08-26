describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should add and remove values to a set and not detect false values', function() {
    set.add('Danny Devito');
    set.remove('Danny Devito');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Danny Devito')).to.equal(false);
    expect(set.contains('Bob')).to.equal(false);
  });

  it('should add and remove lots of values from a set', function() {
    set.add('Mel Gibson');
    set.add('Zack');
    set.add('Ed');
    set.remove('Zack');
    set.add('Birdo Dee');
    set.add('Charlie');
    set.remove('Mel Gibson');
    console.log(set);
    expect(set.contains('Zack')).to.equal(false);
    expect(set.contains('Birdo Dee')).to.equal(true);
    expect(set.contains('Mel Gibson')).to.equal(false);

  });
});
