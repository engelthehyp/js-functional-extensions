const expect = require('expect.js');

describe('isEmpty', () => {
	it('Should return true with the empty list', () => {
		expect([].isEmpty()).to.be.ok();
	});

	it('Should return false with a non-empty list', () => {
		expect([1, 2, 3].isEmpty()).not.to.be.ok();
	});
});

describe('take', () => {
	it('Should return the empty list when the input list is empty with any number', () =>
		expect([].take(5)).to.equal([]));

	it('Should return the empty list when given 0', () =>
		expect([1, 2, 3, 4, 5].take(0)).to.equal([]));

	it('Should return the same list when given a number greater than or equal to the length of the list', () =>
		expect([1, 2, 3, 4, 5].take(10)).to.equal([1, 2, 3, 4, 5]));

	it('Should return a list with the first n elements of a list where n is less than the length of the list', () =>
		expect([1, 2, 3, 4, 5].take(3)).to.equal([1, 2, 3]));
});
