# 2. Anchor tag
Created Wednesday 17 June 2020

#### Why
Used for linking to other pages.
Syntax:

* ``<a href=""> </a>`` is used for making links.


#### What can it link to:

1. Other URL's/html pages
2. Files
3. Link element on the same page, using id attribute of destination. Syntax: ``<a href="#idname"></a>``. Jump, no reloads 😃️!
4. Email address, phone number, SMS.
	1. Email - [``mailto:example@gmail.com``](mailto:example@gmail.com)``?subject=Subject&body=Content``
	2. SMS - ``sms:1234567890?body=Content``
	3. Phone call - ``tel:1234567890``

This opens the relevant app.
subject and body may be skipped.


* *Huge Plus*: As anchor is an open tag, We can set images to act as links, and technically anything.


#### Other attributes

1. ``target`` attribute of *``_blank``* will open the link in new tab. It has 3 more values, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target).
2. ``download`` boolean attribute will download the file, if it's passed in ``href``.


#### Relative vs Absolute address/paths

* Relative is based current folder address.
* Absolute is based on the root (/home or analogue) folder.


