# 5. Table
Created Tuesday 01 September 2020

#### Tags

1. **``table``**- basic table tag
2. **``tr``** - row of table.
3. Cells
	1. **``td``** - tag for enclosing a usual data cell.
	2. **``th``** - tag for enclosing a header cell, i.e this is only used inside **``thead``**
4. Sections - *optional*.
	1. **``thead`` **- head of the table, containing headings
	2. **``tbody``** - body of the table, containing cells
	3. **``tfoot``** - the foot of the table, contains appendices and/or legends.



* **tfoot** may be ommitted.

	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>RollNo</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td></td>
			<tr>
		</tbody>
	</table>


#### Heading Scope
FIXME - to be included or not.
See <https://www.w3schools.com/tags/att_th_scope.asp> and <https://www.codecademy.com/courses/learn-html/lessons/html-tables/exercises/table-headings>

#### Row and column spans attributes

* There are two attributes that merge space for a cell to take multiple row/column cells.
* Syntax: add ``rowspan``/``colspan``="*number*", the number defines number of cells spanned. Default value is 1 for both, 😁️.

![](/assets/5_Table-image-1.png)

### In the diagram

* Hours has been rowspan set to 6, Sat F has rowspan set to 3, Lunch has colspan set to 5.
* All other corresponding rows/columns have been removed. They are **absent**.


#### Border attrbute
FIXME, to be included or not. I'll use CSS anyways.
Can set this to some integer value, for the table outline.

