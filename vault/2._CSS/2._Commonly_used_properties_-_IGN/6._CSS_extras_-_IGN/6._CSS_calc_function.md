# 6. CSS calc function
Created Wednesday 03 November 2021

#### Why
Allows calculations in CSS, for different length units.

#### How
Syntax:
	selector{
		font-size: calc(32px + 10vm);
		width: calc(100px + var(--oldwidth));
	}


* Inputs can be same too, but that's useless.
* Multiplications can be done to.
* CSS Variables can be used.


NOTE: Addition and subtraction need whitespace between operators. 🛑️

#### Applications of calc

* Dynamically control stuff: font-sizes with ``vw`` (view width).


