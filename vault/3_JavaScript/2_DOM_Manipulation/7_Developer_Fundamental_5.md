# 7. Developer Fundamental 5

Created Monday 13 July 2020

FIXME - this page has wrong information, correct it.

- [Critical Rendering Path](https://bitsofco.de/understanding-the-critical-rendering-path/)
- DOM made the whole process of handling everything on the webpage very easy.
- But it has a few problems:
  1.  Reflow - The DOM tree needs to be remade, all elements have to be traversed again.
  2.  Repaint - The visual elements like outline, color etc are changed in the CSSOM tree.
- Note: Reflow is [expensive](https://areknawo.com/dom-performance-case-study/#commento-login-box-container) as compared to Repaint.
- We want to minimize DOM manipulation and events.

**React.js **helps in [achieving](https://www.youtube.com/watch?v=mLMfx8BEt8g&ab_channel=FullstackAcademy) these goals.
