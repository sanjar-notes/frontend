# 5. Positioning
Created Sunday 25 April 2021

Attribute: ``position``
Values: 5 values available.

1. `static` - the default, per document flow.
2. `relative` - moves only if specified w.r.t the normal document flow. Not used generally.
3. `absolute` - removed from document flow, set w.r.t the latest non-static ancestor. If nothing is found, set w.r.t body. Default is (left=0, top=0). `top`, `right`, `left` and `bottom` are needed to be set.
4. `fixed` - fixed w.r.t the viewport, no matter what. `top`, `right`, `left` and `bottom` are needed to be set.
5. `sticky` - behaves like `relative` (i.e. normal), until set `top`, `right`, `bottom` or `left` value becomes "true". Behaves like `fixed` from then on (if motion continues). If multiple sticky elements (on the same trail) are there, the newer activated one will replace the older one.

Except `position: static`, all other position types can specify `top`, `bottom`, `left` or `right` attributes with a length as value.

* short for position type
* These are used to define how a selection is position.
* [All 5 positions, < 10 mins](https://www.youtube.com/watch?v=jx5jmI0UlXU)
* [Sticky positioning < 8 min](https://www.youtube.com/watch?v=NzjU1GmKosQ)
* [MDN position demo](https://developer.mozilla.org/en-US/docs/Web/CSS/position)