# 3. Lists
Created Wednesday 17 June 2020

There are 3 kinds of lists:

1. ``ul`` - Unordered-lists
2. ``ol`` - Ordered-lists, default is number
3. ``dl`` - definition lists


* Elements inside ul, ol are specified using <li></li> tag, where ``li`` stands for list item.
* Elements inside dl are specified using ``dt``(definition title) and ``dd``(definition description) items.
* Lists can be nested, even heterogeneously.

	<ul>
	    <li></li>
	        <!-- We can input any thing inside a list item -->
	</ul>
	
	<ol type="a">
		<!-- i I a A, default is 1 -->
		<li></li>
		<li></li>
		<!-- lists can be embedded -->
	</ol>
	    
	<!-- 3rd kind of lists definition -->
	<dl>
		<dt> Title 1</dt>
		<dd> Description 1 </dd>
		
		<dt> Title 1</dt>
		<dd> Description 1 </dd>
	</dl>

