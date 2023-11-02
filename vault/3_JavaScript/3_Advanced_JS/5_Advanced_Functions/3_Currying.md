# 3. Currying

Created Thursday 25 March 2021

TODO

#### What is currying?

- _A [curried](https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983) function is a function that takes multiple arguments one at a time._ All functions in the chain are different, with the contexts building up as we go inside(∵ closure).
- Function call trace is a singly linked list.

#### Syntax

- Arrow functions are used, because they store state.
- Definition: Most parts are one liners, so they may be chain them directly {} for the body.
- Function invocation: f(a)(b)(c) also called point-free-style.

#### Use

- Generate specific version of functions, by setting contexts. Example: `const g = f(a)(b);` we can set contexts a and b to generate `g`, a specialized function.
- **Why do this** ? - Concise code and DRY

  // Without currying
  function add(x, y, z) { return x + y + z } // general definition
  function a1(p) { return 1 + 2 + z; } // no reuse
  function a2(p) { return 10 + 20 + z; } // no reuse

  // With currying
  let add => x => y => z => (x + y + z);
  let a1 = add(1)(2);
  let a2 = add(10)(20); //

  // calling is the same

- Currying is highly incentivized in JS - there are even special functions which help debug curried functions.
