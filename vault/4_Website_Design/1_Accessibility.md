# 1. Accessibility
Created Tuesday 01 September 2020

- Headings should be used in order 1 to 6
- Use only one h1 per page
- Have either an alt or a figcaption
- one main per page

---

**Hiding the element**

- Hide an element using overflow=hidden(This is read by screen readers only)
- visibility:none or display:none or (width:0px and height:0px) and hide the element [completely](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-elements-only-visible-to-a-screen-reader-by-using-custom-css), for everyone.

---

**Contrast for reading**

- WCAG [recommend](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/improve-readability-with-high-contrast-text)s at least 4.5:1 ration for normal text. Maximum value is 21:1 for black:white and 1:1 for no the same color.
- Adjust the colors using hsl()
- Avoid colors which are neighbours in the color wheel

---

**Fast navigation**

- [accesskey](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/make-links-navigable-with-html-access-keys) attribute and set it to any string
