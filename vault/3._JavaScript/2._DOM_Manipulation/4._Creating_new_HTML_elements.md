# 4. Creating new HTML elements
Created Sunday 12 July 2020

We have a shopping list and want to add a new item to the list.
Steps to create an element.

1. Create the element object using document.createElement('tag');
2. Add the content using document.createTextNode(newitem);
3. Set the attributes, classes using set attribute.
4. Attach the eObj to the required element using par.appendChild(eObj);


Note: Objects can be deleted using eObj.**remove()**;

