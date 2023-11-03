# 3. Classes and objects
Created Thursday 25 March 2021


* Instantiation - Making an object from a class.
* Syntax - defining a class:
	```js
	class A{
		constructor(name) // constructor is a keyword
		{
			this.name = name;
		}
		intro()
		{
			console.log(`Hi, I'm ${this.name}.`);
		}
		// no need of destructor - auto gargabge collector
	};
	```
* Syntax - instantiation
	```js
	Sanjar = new A('Muhammad Sanjar Afaq');
	Sanjar.intro();	// -> Hi, I'm Muhammad Sanjar Afaq
	```

FIXME: static functions
FIXME: inheritance

