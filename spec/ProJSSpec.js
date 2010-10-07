describe("ProJSSpec", function() {
  it('uses function overload', function() {
    var result = sendMessage("Hello, world!");
    expect(result).toEqual("Hello, world!");
  });

  it('calls function with object input', function(){
    var result = sendMessage("How are you?",{
      handleMsg: function(msg){
        return "I sent this: " + msg}
    });
    expect(result).toEqual('I sent this: How are you?');
  });

  it('multiple variables refer to the same object', function() {
    var obj = new Object();
    var otherObj = obj;

    obj.oneProperty = 2;
    expect(obj.oneProperty).toEqual(otherObj.oneProperty);
  });

  it('example of self modifying object', function() {
    var items = new Array('one', 'two', 'three');

    var itemsRef = items;

    items.push("four");
    expect(items.length).toEqual(itemsRef.length);
  });

  it('changes reference while maintains integrity', function(){
    var items = new Array('one', 'two', 'three');
    var itemsRef = items;
    items = new Array('new', 'array');
    expect(items.length).not.toEqual(itemsRef.length);
  });

  it('creates an array from the two arguments provided', function(){
    var resultArray = makeArray("one", "two");
    expect(resultArray.length).toEqual(2);
  });

  it('creates an array from the three arguments provided', function() {
    var resultArray = makeArray("one", "two", "three");
    expect(resultArray.length).toEqual(3);
  });

  it('converts an input string to integer', function(){
    var output = convertToInt("1");
    expect(output).toEqual(1);
  });

  it('can\'t convert an integer to integer', function(){
    var output = convertToInt(1);
    expect(output).toBeNull();
  });

  it('can tell if User object is User through constructor', function(){
    var user = new User();
    expect(user.constructor).toEqual(User);
  });

  it('checks the type of arguments', function(){
    var result = argumentTypeCheck([String, String, User], ["one", "two", new User()]);
    expect(result).toBeTruthy();
  });

  it('has currying as well', function(){
    var addFive = addGenerator(5);
    expect(addFive(4)).toEqual(9);
  });

  it('sets properties on object', function(){
    var obj = {
      val: 5,
      sayHello: function(name){
        return "Hello, " + name;
      }
    };
    expect(obj.val).toEqual(5);
    expect(obj.sayHello('John')).toEqual("Hello, John");
  });

  it('takes a string argument in its constructor', function(){
    var user = new User('Mike');
    expect(user.name).toEqual('Mike');
  });

  it('can add functions to the object through prototype', function(){
    var user = new User("Mike");
    expect(user.getName()).toEqual("Mike");
  });

  it('has privileged methods', function(){
    var user = new User("John", 40);
    expect(user.getYearBorn()).toEqual(1970);
  });
});
