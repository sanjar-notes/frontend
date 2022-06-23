# 29. Logical ops and value evaluation
Created Thursday 3 March 2022
- [ ] in vault
- [x] In brain memory

In JavaScript, the logical AND and OR have special meaning.
- OR evaluates to the first truthy value. So `false || 'Sanjar'` evaluates to `Sanjar`. If all are falsy, it returns evaluates to the last value, so `false || undefined` evaluates to `undefined`. This is because of the short circuit behavior of OR. This behavior is used at many places to set default values to variables, like so:
```js
function f(name) {
	name = name || '<Default Name here>';
}
f(); // if nothing is passed, name = undefined, so the string is returned
```
- AND returns the first falsy value. It returns the last value if all variables involved are truthy. So `true && 1 && 'Sanjar'` evaluates to `Sanjar`. Also `undefined && true && 'Sanjar'` evaluates to `undefined`. This due to the short-circuit behavior of AND.

In short AND and OR are logical operators, but they don't necessarily evaluate to`Boolean` values.

Note: In ES6+ functions, default values can be placed in params with the assignment operator, and OR is not needed.