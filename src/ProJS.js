function sendMessage(input, obj) {
  if (arguments.length == 2) {
    return obj.handleMsg(input);
  } else {
    return input;
  }
}

function makeArray() {
  var arr = [];
  for(i=0; i<arguments.length; i++) {
    arr.push(arguments[i]);
  }
  return arr;
}

function convertToInt(input){
  //if(typeof input == "string")
  if(input.constructor == String)
    return parseInt(input);

  return null;
}

function User(name, age) {
  this.name = name;
  this.age = age;

  var year = 2010 - age;

  this.getYearBorn = function(){
    return year;
  };
}

User.prototype.getName = function(){
  return this.name;
};

function argumentTypeCheck(types, args){
  if(types.length != args.length){
    throw "Invalid number of arguments";
  }

  for(i=0; i<types.length; ++i){
    if(args[i].constructor != types[i])
      return false;
  }

  return true;
}

function addGenerator(num) {
  return function(arg) { return num + arg };
}
