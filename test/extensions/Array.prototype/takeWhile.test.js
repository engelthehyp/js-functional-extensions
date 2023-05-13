const FunctionalExtensions = require('../../../functional-extensions.js');
FunctionalExtensions.init();

describe('takeWhile', () => {
	it('Returns the empty list when given the empty list', () =>
		expect([].takeWhile((x) => true)).toStrictEqual([]));

	it('Returns the same list when the predicate is true for all entries', () =>
		expect([0, 1, 2, 3, 4, 5].takeWhile((x) => x >= 0)).toStrictEqual([
			0, 1, 2, 3, 4, 5,
		]));

	it('Returns the empty list when the predicate is false for all entries', () =>
		expect([0, 1, 2, 3, 4, 5].takeWhile((x) => x < 0)).toStrictEqual([]));

	it('Takes from the list until the predicate is false for an entry (exclusive)', () =>
		expect([0, 1, 2, 3, 4, 5]));
});
