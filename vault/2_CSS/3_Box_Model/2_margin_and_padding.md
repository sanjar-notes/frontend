# 2. margin and padding
Created Tuesday 16 June 2020

### `margin`
Margin is the space outside the element boundary.

* They are just like border - there are 4 of them
* We can use shorthand notation
* auto : makes the value as high as possible. Example: makes the element horizontally at the center of the page. If set for all, makes the tag center horizontally.
* inherit: Inherits the parents value for the said margin(or all of them). Makes a cascade like pattern.
- margin collapse: Refers to the practice of setting one of the elements margin to 0 and the other to the max. Should be done only for vertical margins.


### `padding`
This defines the space between the boundary and the contents of the element.


### when to use padding/margin?
Consider a web app made up of components, including many reusable ones.

The core code for *reusable components shouldn't bother the space outside them*, so avoid using margin in them, use padding instead. See code (good):
```html
<div style="padding: 16px;">
	...
<div>
```


On pages where components are integrated, i.e. reusablity of the page is assumed to be irrelevant, *use margin for inter-component spaces*. Example: A page has a 3 form fields one below the other. See code (good):
```html
<form>
	<input />
	<input style="margin-top: 12px;" />
	<input style="margin-top: 12px;" />
	<input style="margin-top: 12px;" />
<form>
```

So its quite simple, don't make life harder for the future/other developers, mind your own space.