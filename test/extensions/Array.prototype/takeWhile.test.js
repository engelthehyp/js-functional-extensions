const FunctionalExtensions = require("../../../functional-extensions.js");
FunctionalExtensions.init();

describe('takeWhile', () => {
	it('Returns the empty list when given the empty list', () =>
		expect([].takeWhile(i => true)).toStrictEqual([]));
});