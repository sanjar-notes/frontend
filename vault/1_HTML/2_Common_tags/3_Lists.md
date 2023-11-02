# 3. Lists
Created Wednesday 17 June 2020

### 3 types of lists
1. ``ul`` - Unordered-lists
2. ``ol`` - Ordered-lists, default is number
3. ``dl`` - definition lists

### About lists
* Elements inside `ul`, `ol` are specified using `<li></li>` tag, where ``li`` stands for list item.
* Elements inside dl are specified using ``dt``(definition title) and ``dd``(definition description) items.
* Lists can be nested

### Examples
```html
<ul>
	<li></li>
		<!-- We can input any thing inside a list item -->
</ul>
```
```html
<ol type="a">
	<!-- type = i | I | a | A, default is 1 -->
	<li>Optimus</li>
	<li>Bumblebee</li>
	<!-- lists can be embedded -->
</ol>
```
```html
<!-- 3rd kind of lists definition -->
<dl>
	<dt> Commutative </dt>
	<dd> Order of arguments in operation gives the same output </dd>
	
	<dt> Rational </dt>
	<dd> Can be represented as a ratio of whole numbers </dd>
</dl>
```