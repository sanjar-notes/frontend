# 1. Writing stuff
Created Wednesday 17 June 2020

### Basic text constructs
1. ``h1`` ⇒ heading, h6 is the smallest.
2. ``p`` ⇒ paragraph tag, the attribute ``contenteditable="true"`` is omitted generally.
3. ``strong`` ⇒ bold text
4. ``em`` ⇒ italicized text
5. ``<br />`` ⇒ newline
6. ``<hr />`` ⇒ visible horizontal separator
7. ``cite`` ⇒ citation (displayed as italicized)
8. ``pre`` ⇒ pre-formatted or verbatim text
9. `<blockquote cite="">` ⇒ indented
10. ``q`` ⇒ Quote, Italicized
11. ``abbr`` ⇒ abbreviation. Short is new, `<acronym>` is obsolete.
12. ``dfn`` ⇒ definition.

### Code and scientific notation
1. ``eqn`` - for equations.
2. ``code`` - Mostly the code is wrapped by a `<pre>` wrapped by a `<code>` element.
3. ``samp`` The output of the code.
4. ``var`` represents a variable.
5. ``sub`` is used for subscript text. CH~4~.
6. ``sup`` is used for superscript text. E=mc^2^.


### HTML Entities
* As discussed before, browser ignores whitespace in HTML content.
* So - whitespace, operators and emojis are handled using ``entitites``.
* Syntax for entities - there are 3 equivalent notations - `&code;`, `&#decimal;` and `&#hex;`
* How to use - just write the entity in the content.

Examples
![](../../../assets/1_Writing_stuff-image-1-a92d20ef.png)

### Miscellaneous
1. `<kbd> Ctrl+S </kbd>` for keybindings.
2. ``address`` ⇒ italicizes the address.
3. Use the `title` attribute for abbreviations and citations. This usually adds a hover tooltip to the whole HTML element.

### Demo
```html
<code>
	x = 5;<br>
	y = 6;<br>
	z = x + y;
</code>

<!-- samp - output of the program -->
<p>If you input wrong value, the program will return <samp>Error!</samp></p>

<!-- 2. kbd - represents keyboard input: For quick action, very important in PCs Rendered differenetly-->
<p>Save the document by pressing <kbd>Ctrl + S</kbd></p>

<!-- var helps us render a variable differently - italicised -->
Einstein wrote: <var>E</var> = <var>mc</var><sup>2</sup>.
```
[See Output](output.html)

