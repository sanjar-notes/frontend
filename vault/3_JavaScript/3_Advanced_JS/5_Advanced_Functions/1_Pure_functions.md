# 1. Pure functions

Created Thursday 25 March 2021

#### What are pure functions?

- Have a single purpose.
- Should be free from side-effects(i.e change to external variables), as much as possible.
- Always return something.

#### How to write pure functions?

- Use `const` and avoid using `function` keyword as much as possible.
- This makes our code deterministic(each function is a mathematical function, not just a relation), and consequently more robust.
