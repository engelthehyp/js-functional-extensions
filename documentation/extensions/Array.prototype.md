# Extensions on `Array.prototype`

## Notes

These extensions apply to the Array prototype, so they work with any array as an instance method.
This part of the library is initialized in the `initializeArrayExtensions` function.

## Methods

### `isEmpty`

Returns `true` when there are no elements in the list, and `false` otherwise.

**Signature:** `(this: List<T>) -> bool`

---

### `take`

Returns a list of the first `n` elements in the list.
When `n` is zero, the empty list is returned.
When `n` is greater than the length of the list, the same list is returned.

**Signature:** `(this: List<T>, num: int) -> List<T>`

---

### `takeWhile`

Returns a list of elements from the first list in that order as long as the predicate returns `true`.
In other words, when the original list (`originalList`) has indices `0..n`, `takeWhile` returns a new list with indices `0..m`, where `originalList[m + 1]` is the first element where the predicate returned `false`.
If the predicate is `true` for all values of the list, then the same list is returned.

**Signature:** `(this: List<T>, f: T -> bool) -> List<T>`

---

### `drop`

Returns a list of all but the first `n` elements.
When `n` is zero, the same list is returned.
When `n` is greater than the length of the list, the empty list is returned.

**Signature:** `(this: List<T>, num: int) -> List<T>`

---

### `head`

Returns the first item in the list. If the list is empty, `head` will `throw`.

Calling `head` on the empty list is a developer error. Take care to guard against doing that.

**Signature:** `(this: List<T>) -> T (May Throw)`

---

### `tail`

Returns a list of all but the first item in the list. If the list is empty, `tail` will `throw`.

Calling `tail` on a list with one element will return the empty list.
Calling `tail` on the empty list is a developer error. Take care to guard against doing that.

**Signature:** `(this: List<T>) -> List<T> (May Throw)`

---

### `init`

Returns a list of all but the last element in the list. If the list is empty, `init` will `throw`.

Calling `init` on a list with one element will return the empty list.
Calling `init` on the empty list is a developer error. Take care to guard against doing that.

**Signature:** `(this: List<T>) -> List<T> (May Throw)`

---

### `last`

Returns the last element in the list. If the list is empty, `last` will `throw`.

Calling `last` on the empty list is a developer error. Take care to guard against doing that.

**Signature:** `(this: List<T>) -> T (May Throw)`

---

### `prepend`

Returns a new list in which the item specified
has been placed in index 0 and the rest of the list is identical to the old one.

**Signature:** `(this: List<T>, item: T) -> List<T>`

---

### `includes`

Returns a bool indicating the item specified is in the list.

**Signature:** `(this: List<T>, item: T) -> bool`

---

### `mapConcat`

Runs a map operation over the list that concatenates (the `+` operation) the specified item to the item in the list. You may also specify as the second argument weather or not to add the item at the front. This is only important for types like strings, where `a + b` may not be equal to `b + a`. With types like numbers, it makes no difference.

**Signature:** `(this: List<T>, toConcat: T, atFront: bool) -> List<T>`

---

### `mapJustItem`

Performs a standard map operation on the list with the function specified, except only the item is passed to the function (as opposed to the usual `item, index, array` format).
This is useful when you don't want any possible unexpected behavior from a function that specifies more than one parameter.

**Signature:** `(this: List<T>, f: T -> U) -> List<U>`

---

### `filterNegative`

Works just like `Array.prototype.filter`, except it will only keep the items for which the predicate returns false.

**Signature:** `(this: List<T>, f: T -> bool) -> List<T>`

---

### `max`

Finds the maximum element in the list.
Non-numbers and strings that do not contain valid numbers are filtered out beforehand.
Calling `max` on the empty list, or a list that has no numbers, results in `-Infinity`.

**Signature:** `(this: List<number>) -> number`

---

### `min`

Finds the minimum element in the list.
Non-numbers and strings that do not contain valid numbers are filtered out beforehand.
Calling `min` on the empty list, or a list that has no numbers, results in `Infinity`.

**Signature:** `(this: List<number>) -> number`

---

### `count`

Tells you how many items in the list fulfill the given predicate.

**Signature:** `(this: List<T>, f: T -> bool) -> number`

---

### `countNegative`

Tells you how many items in the list do *not* fulfill the given predicate.

**Signature:** `(this: List<T>, f: T -> bool) -> number`

---

### `reversed`

Returns the list, in reverse order.

**Signature:** `(this: List<T>) -> List<T>`

---

### `sorted`

Returns the list, sorted according to the callback function provided.
If no callback is provided, the list is sorted alphabetically.
Note that this differs from `Array.prototype.sort` which sorts in-place. This method makes a copy.

**Signature:** `(this: List<T>, f: (T, T) -> number) -> List<T>`

---

### `sortedAscending`

Sorts the list in ascending order. It is assumed that the list will contain numbers.

**Signature:** `(this: List<number>) -> List<number>`

---

### `sortedDescending`

Sorts the list in descending order. It is assumed that the list will contain numbers.

**Signature:** `(this: List<number>) -> List<number>`

---

### `sum`

Returns the sum of all numbers and strings that form valid numbers in the list.
The sum of a list with no valid numbers is 0.

**Signature:** `(this: List<number>) -> number`

---

### `product`

Returns the product of all numbers and strings that form valid numbers in the list.
The product of a list with no valid numbers is 1.

**Signature:** `(this: List<number>) -> number`

---

### `mean`

Returns the mean of the valid numbers and strings that form valid numbers in the list.
The mean of a list with no valid numbers is 0.

**Signature:** `(this: List<number>) -> number`

---

### `median`

Returns the median of the valid numbers and strings that form valid numbers in the list.
The median of a list with no valid numbers is 0.

**Signature:** `(this: List<number>) -> number`
