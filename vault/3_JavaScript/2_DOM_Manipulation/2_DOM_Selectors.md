# 2. DOM Selectors

Created Saturday 11 July 2020

### Element Selectors - To get the element object(call it eObj)

- We can select elements and attributes in the DOM(document object) using functions called DOM selectors. The most common ones are:
1. **getElementsByTagName**('arg') - returns a list of element objects with the 'arg' tag. e.g all <p>, all <img>s
2. **getElementsByClassName**('arg') - returns a list of element objects with class 'arg'.
3. **getElementById**('arg') - returns the element object with 'arg' as id. **singular(no s)**

- If we need one or all element objects like CSS selector - they are much powerful and preferred over getElements:
1. **querySelector**('selector') - returns the first element which matches the 'selector'.
2. **querySelectorAll**('selector') - returns the list of all elements which match the 'selector'.

Helps us brush up CSS as well. They used in most of the new codebases.

---

### Attribute Selectors - Assuming we've got the eObj, and now want the attributes

- For editing/reading attributes:
1. elementObj.**getAttribute**('attribute'); //prints the attribute value

![](/assets/2_DOM_Selectors-image-1.png)

2. elementObj.**setAttribute**('attribute'**,** 'newvalue'); // change the attribute

![](/assets/2_DOM_Selectors-image-2.png)

3. We can access and change **inline **style attributes directly by doing elementObj.**style**.backgroundColor = 'red'. But it is _discouraged_ as it violates the principle of **separation of concerns**.

![](/assets/2_DOM_Selectors-image-3.png) is equivalent to ![](/assets/2_DOM_Selectors-image-4.png)
Note: .style [won't](https://css-tricks.com/an-introduction-and-guide-to-the-css-object-model-cssom/) be able to acesss external CSS.

4. Because an element can have multiple classes, we have special **properties** for it:
   1. eObj.className = 'newname'; // if there's only one class
   2. eObj.classList; returns a **read only list** of classnames. It has 3 useful functions
      1. eObj.classList.add('new_class');
      2. eObj.classList.remove('remove_class');
      3. eObj.classList.toggle('class name'); // toggles the presence of a class.

---

### Content Selectors - Change content in the tag or input

1. eObj.innerHTML = 'New content'; // ignores unused tags, <code></code> is invisible. **Dangerous to scripting attacks**
2. eObj.textContent = 'New verbatim text'; // <code></code> will appear verbatim here.
3. eObj.value; // for input tags like text, file etc

---

### Relative selectors

1. eObj.parentElement - the parent element
2. eObj.children - a list of the children elements
3. eObj.firstElementChild
4. eObj.nextElementSibling and eObj.previousElementSibling
