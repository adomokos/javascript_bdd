function Person(name) {
	this.name = name;
}

Person.prototype.getName = function() {
	return this.name;
}

function User(name, password) {
	// Notice that this does not support graceful overloading/inheritance
	this.name = name;
	this.password = password;
}

// User object inherits all of the Person object's methods
User.prototype = new Person();

User.prototype.getPassword = function() {
	return this.password;
}
