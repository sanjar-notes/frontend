# 5. Positioning
Created Sunday 25 April 2021

Attribute: ``position``
Values: 5 values available.

1. Static - the default, per document flow.
2. Relative - moves only if specified w.r.t the normal document flow. Not used generally.
3. Absolute - removed from document flow, set w.r.t the latest non-static ancestor. If nothing is found, set w.r.t body. Default is (left=0, top=0).
4. Fixed - fixed w.r.t the browser, no matter what.
5. Sticky - moves only until set value.

Except `position: static`, all other position types can specify `top`, `bottom`, `left` or `right` attributes with a length as value.

* short for position type
* These are used to define how a selection is position.
* [All 5 positions, < 10 mins](https://www.youtube.com/watch?v=jx5jmI0UlXU)
* [Sticky positioning < 8 min](https://www.youtube.com/watch?v=NzjU1GmKosQ)
* [MDN position demo](https://developer.mozilla.org/en-US/docs/Web/CSS/position)