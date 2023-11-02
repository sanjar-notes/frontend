# 3. Order and Inheritance in CSS

Created Friday 08 May 2020

Reference:
_<https://www.w3schools.com/cssref/css_selectors.asp>
_<https://css-tricks.com/almanac/>

- Explicit code is given the highest priority, because most CSS are from libraries.

What seletors win out in the cascade depends on the following order:
1. **Importance** (!important)
2. Inline styles
3. IDs
4. Classes, attributes and pseudo-classes
5. Elements and pseudo-elements

Obviously - Top down code** order** (top down code - This applies to link tag in HTML too, if using multiple css files)

**Nutshell**: The tags which will probably cover the least area are the most important.

What this means: If we have two styles which potentially apply to the same elements, the specific one is taken, irrespective of line order. If they have the same specificity, order breaks the tie. **Specificity is manual**, i.e \* is the least specific.
Try these resources:
1. [Specificity ](https://specificity.keegan.st/)[Calculator](https://specificity.keegan.st/)

---

1. It's a good practice to keep the CSS file contents in the order of specificity.

---

**Inheritance in CSS**

- Elements get inherit the CSS styles of their parents
