# 26. Primitive types
Created Thursday 3 March 2022
- [ ] in vault

#### Sane practice
- Try to use strict comparison operators as much as possible, and avoid coerced comparison operators.
- Loose comparison operators make code difficult to anticipate, hinder understanding and can be a source of very painful bugs.

- Strict equal - `true` if types and values are same, else `false`.
- Loose equal - `true` if coerced values are equal, else `false`.
- Loose unequal - `false` if coerced values are equal.
- Strict unequal - `true` if coerced values or types are different.