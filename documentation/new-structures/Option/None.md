# Option Monad - `None`

## Notes

An instance of `None` represents the absense of data. It never contains anything. Computations do not continue with `None`.

## Methods

### `map`

Disregards the function and returns `Option.None`.

**Signature:** `(this: Option.None, f: T -> R) -> Option.None`

---

### `flatMap`

Disregards the function and returns `Option.None`.

**Signature:** `(this: Option.None, f: T -> Option<R>) -> Option.None`

---

### `match`

"Lowers" an `Option` back into the "world" of "normal" values. The result of calling the `None` function will be returned.

**Signature:** `(this: Option.None, None: () -> U, Some: T -> V) -> U`

---

### `toString`

A string representation based on the current instance. Returns `Option.None`.

**Signature:** `(this: Option.None) -> string`
