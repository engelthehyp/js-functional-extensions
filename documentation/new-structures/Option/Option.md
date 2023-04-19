# Option Monad

## Notes

The `Option` monad is a type-safe alternative to `null`.
`Option` is the "abstract base class" for `Some` and `None`.
This allows you to treat `Some` and `None` indiscriminately from each other.
You are not expected to handle a direct instance of Option.
Therefore, all methods throw errors, except for toString, which is has a common implementation between `Some` and `None`.
This is important when working with the computational pipeline the Option Monad gives you.

## Methods

Methods:

* `map`: Abstract. Transforms an `Option` with a function ran on the inner value that returns a "normal" (non-monadic) value.
  
  **Signature:** `(this: Option<T>, f: T -> R) -> Option<R>`
* `flatMap`: Abstract. Transforms an `Option` with a function ran on the inner value that returns an `Option`. This avoids the nesting you might see if you had used `map`.
  
  **Signature:** `(this: Option<T>, f: T -> Option<R>) -> Option<R>`
* `match`: Abstract. "Lowers" an `Option` back into the "world" of "normal" values. If the `Option` was `None`, the result of the `None` function will be returned. Otherwise, the result of the `Some` function (called with the inner value of the `Option`) will be returned.
  
  **Signature:** `(this: Option<T>, None: () -> U, Some: T -> V) -> U | V`
* `toString`: A string representation based on the current instance. This is shared between both the `Some` and `None` "subclasses" of `Option`.
  The string returned depends on weather the Option has a value and are of this format:
  * `Option.Some<v>` when the `Option` is `Some` and where `v` is the inner value
  * `Option.None` when the `Option` is `None`
  
  **Signature:** `(this: Option<T>) -> string`
