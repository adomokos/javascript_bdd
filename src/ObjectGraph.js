// http://howtonode.org/0070c3cc25a4ccedf1dce27e55e53a177600e1bd/object-graphs

var john = {
	name: "John Doe",
	age: 28,
	isProgrammer: true,
	likesJavaScript: true
}

var jack = Object.create(john);
jack.name = "Jack Smith";
jack.age = 4;

function makeClosure(name) {
	return function() {
		return name;
	}
}

var Lane = {
	name: "Lane the Lambda",
	description: function() {
		return this.name;
	}
}

var description = Lane.description;

var Fred = {
	name: "Fred the Functor",
	description: description
}
