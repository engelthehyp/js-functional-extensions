# Extensions on `Array`

## Notes

These extensions are availiable for use as "static" methods on Array.
It's usually because they produce a new array from a non-array and therefore it would not make sense for them to be instance methods.
This part of the library is initialized in the `initializeArrayStaticMethods` function.

## Methods

### `range`
Creates an array of numbers, starting from 'start' and ending at 'end', inclusive, counting by 1.

If 'start' and 'end' are equal, a list with one element (the start number) will be returned.
If 'start' is greater than 'end', this function throws a RangeError, so if you need to count backwards, make a regular range and reverse it.

Calling Array.range with 'start' greater than 'end' is a developer error. Take care to guard against doing that.

`Array.range(0, 5)` returns `[0, 1, 2, 3, 4, 5]`.

`Array.range(0, 0)` returns `[0]`.

`Array.range(5, 0)` will throw a `RangeError`.

**Signature:** `(start: int, stop: int) -> Array<int> (May Throw)`
