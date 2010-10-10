describe("Chapter03", function() {
  it('has a Person object with a getName() method', function() {
		var user = new Person("John");
		expect(user.getName()).toEqual("John");
  });

	it('has a User object which inherits from Person', function() {
		var user = new User("Paul", "password");
		expect(user.getName()).toEqual("Paul");
		expect(user.password).toEqual("password");
	});

	it('has User object that has a getPassword() method', function() {
		var user = new User('Paul', 'password');
		expect(user.getPassword()).toEqual('password');
	});
});
