describe("Constructors", function() {
	var rectangle;
	
	beforeEach(function() {
		rectangle = new Rectangle(3, 5);
	});
	
	it("calculates the area", function() {		
		expect(rectangle.getArea()).toEqual(15);
	});
	
	it("calculates the perimeter", function() {
		expect(rectangle.getPerimeter()).toEqual(16);
	});
	
	it("creates Square by inheriting from Rectangle", function() {
		var square = new Square(5);
		expect(square.getArea()).toEqual(25);
		expect(square.getPerimeter()).toEqual(20);
	});
});
