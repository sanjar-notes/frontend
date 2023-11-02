# 1. grid-template
Created Thursday 03 September 2020

## Syntax and usage
- Use these to set the row/column widths.
- There are two:
  1. `grid-template-columns`: colSize1 colSize2 colSize3 ...
  2.  `grid-template-rows`: rowSize1 rowSize2 rowSize3 ...
```css
.container 
{
	display: grid;
	grid-template-columns: 50px 50px;
	/* The grid will have two columns of width 50px*/
}
```
- The number of values specified are the number of rows/columns
- Note: row and column are both plural


## Units for row/col size
There are 4 units (values):
1. fr - fraction of the available(remaining) space
2. auto - takes the space as per content
3. px or em
4. % - percentage of the container dimension
5. `min-content`
6. `max-content`

![](/assets/2_units-image-1.png)


## With `repeat`
### `repeat`
- When specifying grid-template-columns or rows. We can use the repeat function.
- syntax is **repeat(n, x, y, z...)**
- It can be used multiple times, but not nested.

```css
.container
{
  grid-template-columns: repeat(2, 1fr, auto) 2fr;
  /* same as 1fr auto 1fr auto 2fr */
}
```

### `minmax`
Gives two values at the same time, minmax(smaller, greater)
- This makes responsive design even better.

###  `repeat(auto-fill)` 
Don't need to specify the number of repetitions.
- allows us to fill as many grid items as possible.
- Use it in combination with minmax to have a good effect.
- When the maxium size is beyond the container, we have empty space.

e.g This will change the push the other items down if size is less.
```css
.container 
{
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
}
```

### `repeat(auto-fit)`
value is similar to auto-fill but it does not keep any empty space.
[Expands](https://www.freecodecamp.org/learn/responsive-web-design/css-grid/create-flexible-layouts-using-auto-fit) the items accordingly.