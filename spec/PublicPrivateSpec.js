describe("PublicPrivate", function() {
	it('has a public accessor to the private name field', function() {
		var user = new User();
		user.setName("John");
		// a private method add " Changed" to the name
		expect(user.getName()).toEqual("John Changed");
	});

	Xit('hides the private method', function() {
		var user = new User();
		expect(user.privateMethod()).toThrow(e);
	});
});
