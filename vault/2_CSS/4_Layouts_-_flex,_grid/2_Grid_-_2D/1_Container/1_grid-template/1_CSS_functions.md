# 1. CSS functions

Created Thursday 03 September 2020

**repeat**

- When specifying grid-template-columns or rows. We can use the repeat function.
- syntax is **repeat(n, x, y, z...)**
- It can be used multiple times, but not nested.

  .container{
  grid-template-columns:repeat(2, 1fr, auto) 2fr;
  // same as 1fr auto 1fr auto 2fr
  }

---

**minmax**
Gives two values at the same time, minmax(smaller, greater)

- This makes responsive design even better.

---

**auto-fill **value with repeat. Don't specify the number of repetitions.

- allows us to fill as many grid items as possible.
- Use it in combination with minmax to have a good effect.
- When the maxium size is beyond the container, we have empty space.

e.g This will change the push the other items down if size is less.
.container}
grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));}

---

**auto-fit **value is similar to **auto-fill** but it does not keep any empty space. [Expands](https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-flexible-layouts-using-auto-fit) the items accordingly.
