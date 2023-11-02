# 1. Types of CSS
Created Friday 08 May 2020

There are three ways of adding styles, in order of precedence:

1. Inline CSS - style attribute. The most immediate one.

![](/assets/1_Types_of_CSS-image-1.png)
As the element is already selected, just write the code-block's contents.

2. Internal - define the style in the html file, using `<style>` tag in the head. Contents have selectors.

![](/assets/1_Types_of_CSS-image-2.png)

### The 3rd way, the most widely used - External CSS

* use a link tag. And as css is not an input, use href. It takes no input, so it is a closed tag.

	<link rel="stylesheet" type="text/css" href="style.css" >

![](/assets/1_Types_of_CSS-image-3.png)

* The CSS file contents are nothing but the content of the **style **tag.
* Each HTML file can have it's own styles.
* If we need multiple htmls to have the same style, we just link it to the same css.


Q) Why have a <style> sheet if we can add style to HTML:
A) There are many reasons for this:

1. Seperation of concerns, very very important in CS.
2. Multiple people might be working on the html. Integration will be quite difficult.
3. Reduces duplicacy.
4. Lets us get css files which are not saved on the server, or out computer. Like googlefonts etc. Which may be changing.


*****


* Internal and external styles are line order dependent.#main>p:nth-child(35)


