# 1. grid-template

Created Thursday 03 September 2020

- Set these on the container
- Use these to set the row/column widths.
- There are two:

  1.  grid-template-columns: col1 col2 col3 ...
  2.  grid-template-rows: row1 row2 row3 ...

  .container {
  display: grid;
  grid-template-columns: 50px 50px;
  /_ The grid will have two columns of width 50px_/
  }

- The number of values specified are the number of rows/columns
- Note: row and column are both plural
