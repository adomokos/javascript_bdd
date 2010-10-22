// http://howtonode.org/0070c3cc25a4ccedf1dce27e55e53a177600e1bd/object-graphs

function Rectangle(width, height) {
	this.width = width;
	this.height = height;
}

Rectangle.prototype.getArea = function() {
	return this.width * this.height;
};

Rectangle.prototype.getPerimeter = function() {
	return 2 * (this.width + this.height);
}

function Square(side) {
	this.width = side;
	this.height = side;
}

Square.prototype.__proto__ = Rectangle.prototype;
Square.prototype.getPerimeter = function() {
	return 4 * this.width;
}