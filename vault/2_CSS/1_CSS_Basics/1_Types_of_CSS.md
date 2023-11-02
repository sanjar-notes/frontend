# 1. Types of CSS
Created Friday 08 May 2020

There are three ways of adding styles, in order of precedence:

### 1. Inline - style attribute
The most immediate one
```html
<h1 style="color: blue; text-align: center;">This is a heading</h1>

<p  style="color: red;">This is a paragraph.</p>
```
As the element is already selected, just write the code-block's contents as attribute value.

### 2. Internal - `<style>` tag in the head
define the style in the html file, using `<style>` tag in the head. Contents have selectors.
```html
<html>
<head>
<style>
	body {
	background-color: linen;
	}
	hi {
	color: maroon;
	margin-left: 40px;
	}
</style>
</head>

  <body></body>
</html>
```

### 3. External CSS - file with `link`
A `link` tag is used. And as the CSS file is external, use `href`. It takes no input, so it is a closed tag.
```html
<!-- HTML -->
<head>
	<link rel="stylesheet" type="text/css" href="style.css" />
</head>
```
	
```css
/* CSS file */
h2 
{ 
  color: red; 
}

p 
{ 
  color: pink;
}

span
{ 
  color: green;
}
```
* The CSS file contents are nothing but the content of the **style **tag.
* Each HTML file can have it's own styles.
* If we need multiple HTMLs to have the same style, we just link it to the same css.
* Internal and external styles are line order dependent


### Why have a file instead of internal `<style>`
1. Separation of concerns, very very important in CS.
2. Collaboration - Multiple people might be working on the html. Integration will be quite difficult.
3. DRY - don't repeat yourself.
4. Import external CSS - Lets us get css files which are not part our code. Like GoogleFonts etc. Its not very useful to store such things in our code, since they could change at the source.