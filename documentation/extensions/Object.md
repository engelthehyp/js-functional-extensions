# Extensions on `Object`

## Notes

These extensions are availiable for use as "static" methods on Object.
They fulfill some general purpose for any object, and when you can't know if it's safe to invoke methods on said object, static methods are a useful tool.
This part of the library is initialized in the `initializeObjectStaticMethods` function.

## Methods

### `values`

Similar to Object.keys, which returns a list of all the keys of an object.
This method simply returns all the values of the object.
For some reason, it was not built in to earlier JavaScript specifications.

**Signature:** `(object: O as { K : V }) -> Array<V>`

---

### `hasValue`

A simple helper function to tell if a certain object exists and holds a useful value (not null or undefined).

**Signature:** `(object: T) -> bool`
