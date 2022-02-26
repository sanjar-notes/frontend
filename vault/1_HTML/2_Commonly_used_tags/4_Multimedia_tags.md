# 4. Multimedia tags
Created Tuesday 01 September 2020

#### Image

1. <**img**> - self closing image tag
	1. src - path to image file.
	2. alt - text for image file, displayed if image is unavailable
	3. width - in px
	4. height - in px
	5. title - tooltip upon hover
2. <**figure**></**figure**> - used when image has a caption associated with it.
3. <**figcaption**></**figcaption**> - to add caption to image. Used in conjunction only inside a ``figure`` tag - [one inside one](https://www.sitepoint.com/quick-tip-the-right-way-to-use-figure-and-figcaption-elements/)

Example - ``figure`` tag is immensely helpful.
	<figure>
		<img src="myCat.jpg" />
		<figcaption>
			My Cat
		</figcaption>
	<figure>


#### Video

* <**video**>Video not loaded text</**video**>
	1. src
	2. height
	3. width
	4. poster = "image.png"
	5. **``autoplay``**
	6. **``controls``**
	7. **``loop``**
	8. ``muted``


#### Audio

* <audio ``controls``>alt_text_here</audio>
* <source **src=""** **type="audio/mpeg"**> needs to be inside audio - can be used for sound awa transcripts

mAid - self closing tags don't have a text content.

#### **Iframe - simply having a webview from a website**

* It is not a self closing tag
* <iframe>Alt_text_here</iframe>

	<iframe
	        src="https://www.youtube.com/embed/2DGxm1csQQM?"
	        width="height"
	        allow="autoplay"
	        allowfullscreen
	 ></iframe>


#### A note on path

* ``src`` path follows UNIX notation.
* Use forward slash, even if website is on a Windows machine.
* Relative paths are allowed - ``.`` and ``..`` can be used, relative to the current page.
* Absolute paths are OK too, from the root of the machine.
* Note: index.html does not determine the root in any case.


