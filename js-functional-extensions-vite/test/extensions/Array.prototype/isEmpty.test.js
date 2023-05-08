const FunctionalExtensions = require("../../../functional-extensions.js");
FunctionalExtensions.init()

describe('isEmpty', () => {
	it('Should return true with the empty list', () =>
		expect([].isEmpty()).toBeTruthy());

	it('Should return false with a non-empty list', () =>
		expect([1, 2, 3].isEmpty()).toBeFalsy());
});
