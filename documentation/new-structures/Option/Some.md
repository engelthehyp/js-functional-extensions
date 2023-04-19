# Option Monad - `Some`

## Notes

An instance of `Some` represents the presense of data. It should never contain `null` or `undefined`.

## Methods

Methods:

* `map`: Transforms an `Option` with a function ran on the inner value that returns a "normal" (non-monadic) value.
  
  **Signature:** `(this: Option.Some<T>, f: T -> R) -> Option.Some<R>`
* `flatMap`: Transforms an `Option` with a function ran on the inner value that returns an `Option`. This avoids the nesting you might see if you had used `map`.
  
  **Signature:** `(this: Option.Some<T>, f: T -> Option<R>) -> Option<R>`
* `match`: "Lowers" an `Option` back into the "world" of "normal" values. The result of the `Some` function called with the inner value of the `Option` will be returned.
  
  **Signature:** `(this: Option.Some<T>, None: () -> U, Some: T -> V) -> V`
* `toString`: A string representation based on the current instance. Returns `Option.Some<v>` where `v` is the inner value.
  
  **Signature:** `(this: Option.Some<T>) -> string`
