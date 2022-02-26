# 3. background-image
Created Monday 15 June 2020


* Input: **url(**'path of the image'**)**

	body {
	  background-image: url("paper.gif");
	}


* See to it that the background doesn't make the text unreadable
* background-image repeats an image both horizontally and vertically, to control this use:

	body{
	background-image: url(something);
	background-repeat: repeat-x; /* or repeat-y or no-repeat/*
	}


* Also we can specify the position:

	body
	{
		background-image: url(something);
		background-attachment: fixed; /*scroll*/ /* background does not change/*
	}


* background-size: cover fill etc.


