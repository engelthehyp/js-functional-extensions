const FunctionalExtensions = require("../../../functional-extensions.js");
FunctionalExtensions.init()

describe('take', () => {
	it('Should return the empty list when the input list is empty with any number', () =>
		expect([].take(5)).toStrictEqual([]));
	
	it('Should return the empty list when given 0', () =>
		expect([1, 2, 3, 4, 5].take(0)).toStrictEqual([]));

	it('Should return the same list when given a number greater than or equal to the length of the list', () =>
		expect([1, 2, 3, 4, 5].take(10)).toStrictEqual([1, 2, 3, 4, 5]));

	it('Should return a list with the first n elements of a list where n is less than the length of the list', () =>
		expect([1, 2, 3, 4, 5].take(3)).toStrictEqual([1, 2, 3]));
});