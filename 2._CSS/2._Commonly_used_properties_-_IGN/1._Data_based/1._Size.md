# 1. Size
Created Monday 15 June 2020

**Absolute**: This is a physical size like **px**, **mm**, **cm**, **inch**, **pt**(points 1/72 inch)
**Relative**: Units relative to the parents property(e.g relative to parents font size)
examples: **%**(the best), **em**, **rem**(root em, used to easily access root units of the page)
em vs % : em changes if the font size is changed by the user. But not the zoom level or screen size, while percentage accomodates for zoom too.
Remember __1em = 12pt = 16px = 100%__
<https://kyleschaeffer.com/css-font-size-em-vs-px-vs-pt-vs-percent>
So there are 5 units:

1. em (default size) or rem
2. px - pixels
3. % - percentage
4. pt - points


	p.size {
	            font-size: 20; /* pixel by default*/
	            font-size:20 px; /*space is an error*/
	            font-size:20px; /*correct*/
	            font-size:20em; /*20 times the default size of the page*/
	            font-size: 200%; /*This is the latest/*
	            /* Note we don't have a spaces in between
	            em is the default size. Other common size units are
	            0. em(default size value)
	            i. px(pixels)
	            ii. %(percentage)
	            iii. pt(points)
	            */
	
	            /* Note that a CSS is read top to bottom , hence the latest changes are at the last, i.e they are overwrittem.
	            Just like any other programming language.
	             */
	        }

