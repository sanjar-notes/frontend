# 2. CSS Selectors
Created Friday 08 May 2020

CSS selectors are used specify ("select") HTML elements we want to style.

### Types of selectors - overview
There are 5 types of selectors:
1. Simple selector - match by tagname, `id` or `class`
2. Attribute selectors - match by attribute and/or value
3. Combinator selector - match by relation, like sibling, parent etc.
4. Pseudo-class selector - match by UI state, like hover.
5. Pseudo-elements selectors - styles part of an element

Note: Don't try to remember all the names, use as per requirement.

### Syntax for using selectors
- Basic
	```css
	selector_code
	{ 
	  prop1: value1;
	  prop2: value2;
	  prop3: value3;
	}
	```

	```css
	p {}
	
	p.class_name {}
	
	p#id_name {}
	```
- Compound - no separator (no space and no comma). aka Logical AND.
	```css
	/* select all h2 having class "header-text" and "japanese-text"*/
	h2.header-text.japanese-text {}
	/* of course, relevant h2 elements may have extra classes too, but the style will apply */
	
	/* select all p having class "light-text" and are being hovered upon */
	p.light-text:hover {}
	```
- Selector list - comma separated (i.e. same style for multiple selectors). list items are unrelated.
	```css
	p, h2:hover, a:visited, *.light-text {
	  color: red;
	}
	```
- Complex - combination of compounds. i.e. separated by descendant selectors etc.
---
### 1. Simple selectors
1. tag name(p)
2. class(**.**) (somewhat specific - group of elements - irrespective of tag)
3. id(**#**) - (we can use it only once - single) 

Note:	```
* While using multiple classes in tags, they are [space](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/add-borders-around-your-elements) separated. ID's are [supposed](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/set-the-id-of-an-element) to be unique.
* The order of class in the class `attribute` [does not](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/override-class-declarations-by-styling-id-attributes) affect the style. The order of declaration of classes in the CSS does.


### 2. Attribute selector
apply to all elements which have the attribute values set as the arg.
1. only attribute ⇒	tag[attri]`
2. attribute with value ⇒ tag[attri="value"]
3. attribute with value like⇒ tag[attri~="value"]. It's like regex ⇒ ^(starting with), $(ending with), \*
```css
img[alt] /* select all img elements that have an alt attribute*/
{
	color:green;
}

img[alt="server one down"] /* select img elements whose alt matches*/
{
	color:red;
}

img[alt^="image-"] /* select img elements whose alt starts with `image-`*/
{
	color:red;
}
```


### 3. Combinator selectors
Select element(s) in relation to a selector/element.

1. Descendant selector (space) - 
	- `A B`
	- all Bs inside A
2. Child selector (>) - 
	- `A > B` 
	- all Bs having A as parent
3. Successive sibling selector (~)
	- `A + B`
	- all sibling Bs after A
4. Successor sibling selector (+) - 
	- `A ~ B`. 
	- the B sibling after A

MAID: Successive ones are more specific. Future generation and siblings only. Just like normal trees.


### 4. Pseudo-class selector
match by UI state, like hover.  i.e. specifying style for a an element when it's in a given state.
1. a`:link` - unvisited(unclicked) link
2. a`:visited` - visited(clicked) link
3. a`:hover` - (Its an event, hover the mouse over X)
4. a`:active` - (Applies while an element is being activated by the user. e.g, the time span between the press and release of the mouse button)
5. X`:last-child`	(Applied to an X, if it is the last child, of an element)
6. X`:first-child`	(Applied to the an X, if it is the first child, of an element)
7. X`:first-type-child` (Applied to the first X, of each parent)


### 5. Pseudo element selectors
select part of an element, like first letter, first line etc
1. ``::after` - apply just after the element. *Irrespective of the next sibling.*
2. `::before` - apply just before the element. *Irrespective of the next sibling.*
3. `::first-letter`
4. `::first-line`
5. `::selection` - the portion selected by the user.


### Note
1. To select all elements, use `*`. Examples:
	```css
	* { color: red; }
	
	*.name { color: red; }
	.name  { color: red; } /* equivalent */

	/* All children of p tags having class "name" */
	p > *.name { color: red; }
	```
2. `!important` (not recommended) - this is a value flag.
	```css
	p {	color: blue !important;}
	```
3. There's nothing like pseudo ID, makes no sense as they are unique anyway.
