/**
 * Functional Extensions
 * Keep on mapping, filtering, and reducing!
 * ==========
 * Call this function to initialize the whole library.
 * I recommend you use this instead of picking and choosing the extensions you need, because it's less to write.
 * Simply call this function BEFORE you use any of the extensions defined (you should probably put it at the top of your file).
 * Also, look through the documentation of the other functions.
 * The documentation will explain the use of the unit.
 */
function init() {
	[
		initializeObjectStaticMethods,
		initializeObjectExtensions,
		initializeArrayStaticMethods,
		initializeArrayExtensions,
		initializeOptionStaticMethods,
	].forEach(function (f) { f(); });
}

/**
 * Library Unit - Object static extensions - A set of extension methods that apply to Object.
 * ==========
 * Extensions on Object:
 *     - values: similar to Object.keys, which returns a list of all the keys of an object.
 * This method simply returns all the values of the object.
 * For some reason, it was not built in to earlier JavaScript specifications.
 * Signature: (object: O as { K : V }) -> Array<V>
 *     - hasValue: A simple helper function to tell if a certain object exists and holds a useful value.
 * Signature: (object: T) -> bool
 */
function initializeObjectStaticMethods() {
	Object.defineProperties(Object, {
		"values": {
			value: function (object) {
				return Object.keys(object)
					.map(function (i) { return object[i]; });
			}
		},
		"hasValue": {
			value: function (object) {
				return typeof object != "undefined" && object != null;
			}
		},
	});
}

/**
 * Library Unit - Object extensions - A set of extension methods that apply to all objects.
 * ==========
 * Extensions on Object.prototype:
 *     - getOrDefault: Provide a field that you want to read from, and a default value in case the field does not exist or hold a useful value.
 * If the field exists and has a reasonable value, its value is returned. Otherwise, the default value is returned.
 * Signature: (this: O, item: T, defaultItem: U) -> T | U
 *     - strictEquals: Provide an item to compare to. Checks if both items are equal to each other, in terms of both "==" and their type.
 * For example, "4" == 4 is true, but "4".strictEquals(4) is false, because the types do not match.
 * Note that you can only call Object.prototype extension methods on Objects. This is particularly important for this method.
 * Not all things are objects (primitives are not objects), but you can treat some primitives as an object.
 * Raw number literals are not, so you can't write "4.strictEquals(something)".
 * You can, however, use the "Number" wrapper class to turn it into an object. Writing "Number(4).strictEquals(something)" works as intended.
 * Be cautious - don't call Object methods on primitives that can't be treated as objects.
 * These are: number, null, and undefined
 * Signature: (this: O, item: T) -> bool
 */
function initializeObjectExtensions() {
	Object.defineProperties(Object.prototype, {
		"getOrDefault": {
			value: function (item, defaultItem) {
				return Object.hasValue(this[item]) ? this[item] : defaultItem;
			}
		},
		"strictEquals": {
			value: function (item) {
				return this == item && typeof this == typeof item;
			}
		},
	});
}

/**
 * Library Unit - Array static extensions - A set of extension methods that apply to Array
 * Here I will refer to Arrays as "Lists". Different name, same thing in this case.
 * ==========
 * Extensions on Array:
 *     - range: Creates an array of numbers, starting from 'start' and ending at 'end', inclusive, counting by 1.
 * If 'start' and 'end' are equal, a list with one element (the start number) will be returned.
 * If 'start' is greater than 'end', this function throws a RangeError, so if you need to count backwards, make a regular range and reverse it.
 * Calling Array.range with 'start' greater than 'end' is a developer error. Take care to guard against doing that.
 * Array.range(0, 5) returns [0, 1, 2, 3, 4, 5].
 * Array.range(0, 0) returns [0].
 * Array.range(5, 0) will throw a RangeError.
 * Signature: (start: int, stop: int) -> List<int> (May Throw)
 */
function initializeArrayStaticMethods() {
	Object.defineProperties(Array, {
		"range": {
			value: function (start, stop) {
				return Array.apply(null, Array(stop - start + 1))
					.map(function (_, i) { return start + i; });
			}
		}
	});
}

/**
 * Library Unit - Array extensions - A set of extension methods that apply to all arrays
 * None of these methods modify the original array.
 * Here I will refer to Arrays as "Lists". Different name, same thing in this case.
 * ==========
 * Extensions on Array.prototype:
 *     - isEmpty: Returns true when there are no elements in the list, and false otherwise.
 * Signature: (this: List<T>) -> bool
 *     - take: Returns a list of the first "n" elements in the list.
 * When "n" is zero, the empty list is returned.
 * When "n" > this.length, the same list is returned.
 * Signature: (this: List<T>, num: int) -> List<T>
 *     - takeWhile: Returns a list of elements from the first list in that order as long as the predicate returns true.
 * In other words, when the original list (originalList) has indices 0..n, takeWhile returns a new list with indices 0..m,
 * where originalList[m + 1] is the first element where the predicate returned false.
 * If the predicate is true for all values of the list, then the same list is returned.
 * Signature: (this: List<T>, f: T -> bool) -> List<T>
 *     - drop: Returns a list of all but the first "n" elements.
 * When "n" is zero, the same list is returned.
 * When "n" > this.length, the empty list is returned.
 * Signature: (this: List<T>, num: int) -> List<T>
 *     - head: Returns the first item in the list. If the list is empty, 'head' will throw.
 * Calling 'tail' on the empty list is a developer error. Take care to guard against doing that.
 * Signature: (this: List<T>) -> T (May Throw)
 *     - tail: Returns a list of all but the first item in the list. If the list is empty, 'tail' will throw.
 * Calling 'tail' on a list with one element will return the empty list.
 * Calling 'tail' on the empty list is a developer error. Take care to guard against doing that.
 * Signature: (this: List<T>) -> List<T> (May Throw)
 *     - init: Returns a list of all but the last element in the list. If the list is empty, 'init' will throw.
 * Calling 'init' on a list with one element will return the empty list.
 * Calling 'tail' on the empty list is a developer error. Take care to guard against doing that.
 * Signature: (this: List<T>) -> List<T> (May Throw)
 *     - last: Returns the last element in the list. If the list is empty, 'last' will throw.
 * Calling 'last' on the empty list is a developer error. Take care to guard against doing that.
 * Signature: (this: List<T>) -> T (May Throw)
 *     - prepend: Returns a new list in which the item specified
 * has been placed in index 0 and the rest of the list is identical to the old one.
 * Signature: (this: List<T>, item: T) -> List<T>
 *     - includes: Returns a bool indicating the item specified is in the list.
 * Signature: (this: List<T>, item: T) -> bool
 *     - mapConcat: Runs a map operation over the list that concatenates (the "+" operation)
 * the specified item to the item in the list. You may also specify as the second argument
 * weather or not to add the item at the front. This is only important for types like strings,
 * where a + b may not be equal to b + a. With types like numbers, it makes no difference.
 * Signature: (this: List<T>, toConcat: T, atFront: bool) -> List<T>
 *     - mapJustItem: Performs a standard map operation on the list with the function specified,
 * except only the item is passed to the function (as opposed to the usual 'item, index, array' format).
 * This is useful when you don't want any possible unexpected behavior from a function that specifies more than one parameter.
 * Signature: (this: List<T>, f: T -> U) -> List<U>
 *     - filterNegative: Works just like the regular filter operation on lists,
 * except it will only keep the items for which the predicate returns false.
 * Signature: (this: List<T>, f: T -> bool) -> List<T>
 *     - max: Finds the maximum element in the list.
 * Non-numbers and strings that do not contain valid numbers are filtered out beforehand.
 * Calling max on the empty list, or a list that has no numbers results in '-Infinity'.
 * Signature: (this: List<number>) -> number
 *     - min: Finds the minimum element in the list.
 * Non-numbers and strings that do not contain valid numbers are filtered out beforehand.
 * Calling min on the empty list, or a list that has no numbers results in 'Infinity'.
 * Signature: (this: List<number>) -> number
 *     - count: Tells you how many items in the list fulfill the given predicate.
 * Signature: (this: List<T>, f: T -> bool) -> number
 *     - countNegative: Tells you how many items in the list do not fulfill the given predicate.
 * Signature: (this: List<T>, f: T -> bool) -> number
 *     - reversed: Returns the list, in reverse order.
 * Signature: (this: List<T>) -> List<T>
 *     - sorted: Returns the list, sorted according to the callback function provided.
 * If no callback is provided, the list is sorted alphabetically.
 * Note that this differs from the built-in 'Array.prototype.sort()' which sorts in-place. This method makes a copy.
 * Signature: (this: List<T>, f: (T, T) -> number) -> List<T>
 *     - sortedAscending: Sorts the list in ascending order. It is assumed that the list will contain numbers.
 * Signature: (this: List<number>) -> List<number>
 *     - sortedDescending: Sorts the list in descending order. It is assumed that the list will contain numbers.
 * Signature: (this: List<number>) -> List<number>
 *     - sum: Returns the sum of all numbers and strings that form valid numbers in the list.
 * The sum of a list with no valid numbers is 0.
 * Signature: (this: List<number>) -> number
 *     - product: Returns the product of all numbers and strings that form valid numbers in the list.
 * The product of a list with no valid numbers is 1.
 * Signature: (this: List<number>) -> number
 *     - mean: Returns the mean of the valid numbers and strings that form valid numbers in the list.
 * The mean of a list with no valid numbers is 0.
 * Signature: (this: List<number>) -> number
 *     - median: Returns the median of the valid numbers and strings that form valid numbers in the list.
 * The median of a list with no valid numbers is 0.
 * Signature: (this: List<number>) -> number
 */
function initializeArrayExtensions() {
	Object.defineProperties(Array.prototype, {
		"isEmpty": {
			value: function () {
				return this.length == 0;
			}
		},
		"head": {
			value: function () {
				if (this.isEmpty()) throw new Error("'head' was called illegally on the empty list.");
				return this[0];
			}
		},
		"tail": {
			value: function () {
				if (this.isEmpty()) throw new Error("'tail' was called illegally on the empty list.");
				return this.slice(1);
			}
		},
		"init": {
			value: function () {
				if (this.isEmpty()) throw new Error("'init' was called illegally on the empty list.");
				return this.slice(0, this.length - 1);
			}
		},
		"last": {
			value: function () {
				if (this.isEmpty()) throw new Error("'last' was called illegally on the empty list.");
				return this[this.length - 1];
			}
		},
		"take": {
			value: function (num) {
				return this.slice(0, num);
			}
		},
		"takeWhile": {
			value: function (f) {
				function recurse(arr, acc) {
					if (arr.length == 0) return acc;

					var x = arr.head();
					var xs = arr.tail();

					if (f(x)) return recurse(xs, acc.concat([x]));
					return acc;
				}

				return recurse(this, []);
			}
		},
		"drop": {
			value: function (num) {
				return this.slice(num, this.length);
			}
		},
		"prepend": {
			value: function (item) {
				var list = this.slice();
				list.unshift(item);
				return list;
			}
		},
		"includes": {
			value: function (item) {
				return this.indexOf(item) != -1;
			}
		},
		"mapConcat": {
			value: function (toConcat, atFront) {
				return this.map(function (item) {
					return atFront ? toConcat + item : item + toConcat;
				});
			}
		},
		"mapJustItem": {
			value: function (f) {
				return this.map(function (i) { return f(i); });
			}
		},
		"filterNegative": {
			value: function (f) {
				return this.filter(function (index, value, array) { return !f(index, value, array) });
			}
		},
		"max": {
			value: function () {
				return Math.max.apply(null, this.filterNegative(isNaN));
			}
		},
		"min": {
			value: function () {
				return Math.min.apply(null, this.filterNegative(isNaN));
			}
		},
		"count": {
			value: function (f) {
				return this.filter(f).length;
			}
		},
		"countNegative": {
			value: function (f) {
				return this.filterNegative(f).length;
			}
		},
		"reversed": {
			value: function () {
				return this.slice().reverse();
			}
		},
		"sorted": {
			value: function (f) {
				return this.slice().sort(f);
			}
		},
		"sortedAscending": {
			value: function () {
				return this.sorted(function (x, y) { return x - y; });
			}
		},
		"sortedDescending": {
			value: function () {
				return this.sorted(function (x, y) { return y - x; });
			}
		},
		"sum": {
			value: function () {
				return this
					.filterNegative(isNaN)
					.mapJustItem(parseFloat)
					.reduce(function (x, y) { return x + y; }, 0);
			}
		},
		"product": {
			value: function () {
				return this
					.filterNegative(isNaN)
					.mapJustItem(parseFloat)
					.reduce(function (x, y) { return x * y; }, 1);
			}
		},
		"mean": {
			value: function () {
				if (this.countNegative(isNaN) == 0) return 0;

				return this.sum() / this.countNegative(isNaN);
			}
		},
		"median": {
			value: function () {
				if (this.length == 0) return 0;

				var mid = Math.floor(this.length / 2);
				var sorted = this.filterNegative(isNaN).sortedAscending();

				if (sorted.length % 2 != 0) return sorted[mid];
				return (sorted[mid - 1] + sorted[mid]) / 2;
			}
		},
	});
}

/**
 * Library Unit - Option Monad - An abstraction to allow simple computation, even when the contained value may not exist.
 * 'Option', 'some', and 'none' are all part of this unit.
 * Call this function in order to initialize the static extensions on 'Option', which are listed below:
 * ==========
 * Static extensions on Option:
 *     - of: Turns a normal value into an Option of that value, also known as "return".
 * It's safer to use 'Option.of' instead of 'some' because it will return a 'none' automatically if your input is null or undefined.
 * This is a useful trait if you are unsure of the existence of the value before you are able to lift it into the Option world.
 * Signature: (item: T) -> Option<T>
 */
function initializeOptionStaticMethods() {
	Object.defineProperties(Option, {
		"of": {
			value: function (item) {
				if (Object.hasValue(item)) return some(item);
				return none();
			}
		},
	});
}

/**
 * 'Option' is the "abstract base class" for 'some' and 'none'.
 * This allows you to treat 'some' and 'none' indiscriminately from each other.
 * You are not expected to handle a direct instance of Option.
 * Therefore, all methods throw errors, except for toString, which is ahas a common implementation between 'some' and 'none'
 * This is important when working with the computational pipeline the Option Monad gives you.
 * ==========
 * Methods:
 *     - map: An abstract method, establishes a common interface.
 * Signature: (this: Option<T>, f: T -> R) -> Option<R>
 *     - flatMap: An abstract method, establishes a common interface.
 * Signature: (this: Option<T>, f: T -> Option<R>) -> Option<R>
 *     - matchWith: An abstract method, establishes a common interface.
 * Signature: (this: Option<T>, none: () -> U, some: T -> U) -> U
 *     - toString: A string representation based on the current instance.
 * Signature: (this: Option<T>) -> string
 * This is shared between both the 'some' and 'none' "subclasses" of 'Option'.
 * The string returned depends on weather the Option has a value and are of this format:
 * "Option.some<v>" where v is the inner value, and "Option.none"
 */
function Option(item) {
	return {
		_componentName: "Option",

		value: item,

		map: function (f) {
			throw new Error([
				"Error in Functional Library",
				this._componentName,
				"Map was not overridden."
			].join(" - "));
		},

		flatMap: function (f) {
			throw new Error([
				"Error in Functional Library",
				this._componentName,
				"flatMap was not overridden."
			].join(" - "));
		},

		matchWith: function (none, some) {
			throw new Error([
				"Error in Functional Library",
				this._componentName,
				"MatchWith was not overridden."
			].join(" - "));
		},

		toString: function () {
			return this.matchWith(
				function () { return "Option.none" },
				function (v) { return "Option.some<" + v.toString() + ">"; }
			);
		},
	};
}

/**
 * 'some' represents the presence of data.
 * This is the standard, "happy" route of a computational process.
 * You might use 'some' (which contains a value) in a division function
 * to represent the result when the divisor is non-zero (in other words, any time a valid result is found).
 * ==========
 * Methods:
 *     - map: Applies a "normal" function to the value inside the option, then returns the result wrapped as an option.
 * As long as the result of the function was not null or undefined, it is wrapped in an instance of 'some'. Otherwise, it's wrapped in 'none'.
 *     - flatMap: Applies an "Upward world-crossing" function to the value inside the option, then returns the result.
 * The function that is applied may return 'some' or 'none', based on the processing done.
 * We need 'flatMap' because if we used map with an "Upward world-crossing" function,
 * we would end up with something like this: Option<Option<T>>. 'flatMap' "flattens" this into an Option<T>.
 *     - matchWith: Gets a regular value from the option by returning the result of the 'some' callback function
 * provided in the pattern argument. It can be considered as a "branch" - even though there is no explicit check on the value,
 * polymorphism allows for the two different implementations of Option ('some' and 'none') to have different results.
 */
function some(value) {
	var intermediate = new Option(value);

	intermediate.map = function (f) {
		if (Object.hasValue(f(this.value)))
			return some(f(this.value));

		return none();
	};

	intermediate.flatMap = function (f) {
		return f(this.value);
	};

	intermediate.matchWith = function (none, some) {
		return some(this.value);
	};

	return intermediate;
}

/**
 * 'none' represents the absence of data.
 * This is most often used to represent that some computation failed.
 * You might use 'none' in a division function to represent the result when the divisor is zero.
 * ==========
 * Methods:
 *     - map: Disregards the function provided and returns an instance of 'none'.
 * Since the computation has already failed if you are working with 'none', the only reasonable course of action is to return 'none' also.
 *     - flatMap: Same as map, disregards the function provided and returns an instance of 'none'.
 * Since the computation has already failed if you are working with 'none', the only reasonable course of action is to return 'none' also.
 *     - matchWith: Gets a regular value from the option by returning the result of the 'none' callback function
 * provided in the pattern argument. Because there is no meaningful value in an instance of 'none', the 'none' callback receives no arguments.
 * It can be considered as a "branch" - even though there is no explicit check on the value,
 * polymorphism allows for the two different implementations of Option ('some' and 'none') to have different results.
 */
function none() {
	var intermediate = new Option();

	intermediate.map = function () { return none(); };
	intermediate.flatMap = function () { return none(); };

	intermediate.matchWith = function (none, some) {
		return none();
	};

	return intermediate;
}
