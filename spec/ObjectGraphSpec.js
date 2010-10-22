describe("ObjectGraph", function() {
	it('has John, who likes JS', function() {
		expect(john.likesJavaScript).toEqual(true);
	});
	
	it("has Jack, who was created from John", function() {
		expect(jack.age).toEqual(4);
		expect(jack.likesJavaScript).toBeTruthy();
	});
	
	it("creates closure", function() {
		var input1 = "Cloe the Closure";
		var input2 = "Albert the Awesome";
		var description1 = makeClosure(input1);
		var description2 = makeClosure(input2);
		expect(description1()).toEqual(input1);
		expect(description2()).toEqual(input2);
	});
	
	it("defined Lane", function() {
		expect(Lane.description()).toEqual("Lane the Lambda");
	});
	
	it("uses the description closure, and calls it with call", function() {
		var testString = "Zed the Zetabyte";
		expect(description.call({name: testString})).toEqual(testString);
	});
	
	it("reuses the description closure object in Fred", function() {
		expect(Fred.description()).toEqual("Fred the Functor");
	});
});
