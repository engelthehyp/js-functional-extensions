# Extensions on Object.prototype

## Notes

These extensions apply to the Object prototype, so they work with any object as an instance method.
This part of the library is initialized in the `initializeObjectExtensions` function.

## Methods

### `getOrDefault`
Provide a field that you want to read from, and a default value in case the field does not exist or hold a useful value.
If the field exists and has a reasonable value, its value is returned. Otherwise, the default value is returned.

**Signature:** `(this: O, item: T, defaultItem: U) -> T | U`

---

### `strictEquals`
Provide an item to compare to. Checks if both items are equal to each other, in terms of both `==` and their type.
For example, `"4" == 4` is `true`, but `"4".strictEquals(4)` is false, because the types do not match.

Note that you can only call Object.prototype extension methods on Objects. This is particularly important for this method.
Not all things are objects (primitives are not objects), but you can treat some primitives as an object.
Raw number literals are not, so you can't write `4.strictEquals(something)`.
You can, however, use the "Number" wrapper class to turn it into an object. Writing `Number(4).strictEquals(something)` works as intended.

Be cautious - don't call Object methods on primitives that can't be treated as objects.

**Signature:** `(this: O, item: T) -> bool`
