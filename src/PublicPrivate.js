function User() {
	var name;

	var privateMethod = function() {
		name += " Changed";
	};

	return {
		setName: function(newName) {
			name = newName;
			privateMethod();
		},
		getName: function() {
			return name;
		}
	};
}
