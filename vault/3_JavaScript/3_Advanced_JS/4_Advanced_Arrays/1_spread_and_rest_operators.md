# 1. spread and rest operators
Created Thursday 25 March 2021

#### Are the two different?
- Both use ellipisis as operator symbol.
- Both have different use:
  1.  Unpacking things - "spread operator".
  2.  Packing things - "rest parameter/element".

#### Spread operator
- Purpose - unpack iterables.
- Syntax - `...iter`. Exposes all elements, comma separated. May be placed inside `[]` or `{}`.
- No in place effect.
- Uses:
  - Basic unpacking - `[1, 2, ...x]`, where `x` is an existing iterable.
  - Concatenation - `[...x, ...y]`. A shorthand for the array `concat` function.
  - Function call(elements as params) - `f(...[1, 2, 3]);` is equivalent to `f(1, 2, 3)`. Extraneous elements(to the right) are ignored, if parameters are less.
  - Copy an array - `let x = [1, 2], y = [...x];`
- How this works - syntax sugar.

#### Rest parameter/element
- Purpose - pack elements, to an array.
- Syntax - There is a slight variation
  - Rest param - `f(a, b, ...x)`
  - Rest element - `[a, b, ...x] = iter`, must use a `[]` or `{}`.
- Gotcha - only the last param/element can be a rest param/element, ergo, there can only be one.
- Uses:
  - Variadic function definition - `f(a, b, ...theArgs)`, `theArgs` will be an array.
  - Rest element - `[a, ...b] = new Set([1, 2, 3])`, result `a = 1`, `b = [2, 3]`.
- Variadic functions were possible before ES6 too - you had to use the `arguments` object, which is not an array and was therefore difficult to work with. Rest param solved this problem.
- How this works? - Rest element is a simple syntax sugar. For functions, an enclosing [] is placed around the param list by the interpreter, `arguments` as rvalue, like so: `[a, b, ...c] = arguments;`. Thus, we get `c` as a array.

<https://www.youtube.com/watch?v=R8rmfD9Y5-c&ab_channel=WebDevSimplified> FIXME

#### How is spread operator, rest param and destructuring related?
- All 3 have different purpose:
  1.  Spread operator - unpack elements.
  2.  Rest param/element - pack elements.
  3.  Destructuring - initialize variable(_s_).
- Destructuring can work with multiple values, other 2 don't.
- It is simple.
