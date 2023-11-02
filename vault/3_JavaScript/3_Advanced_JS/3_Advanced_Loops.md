# 3. Advanced Loops
Created Saturday 18 July 2020

#### Aren't for/while enough?
No, because they:

* Work on iterables, but with a potential for off-by-one errors.
* Don't work on objects.


#### 1. forEach - array
* Purpose - iterate over an array.
* Since ES5.
* Syntax

	myIterable.forEach(f); // f(ele) for all elements, returns nothing

	f = function(a){};	// a  = element value
	f = function(a, b){}; // a = element value, b = index


* Arguments passed to function, in order:
	1. Element
	2. Index, only for arrays. OPTIONAL
* Gotcha - no way to ``break`` or ``continue``


#### 2. for ``in`` - object
* Purpose - iterate over an object.
* Iterates over fieldNames, not values.
* MAID(in-enumerate object)

	let timeSpace = { place:'Earth',  era:'Phanerozoic'};
	for(const ele in x)
		console.log(ele);
	/* fields not values
	place
	era
	/*


* Cons
	* Works only for one iterable - array.
	* Iteration will include functions, in addition to indices of the array. [See](messyForIn.js).
	* Loop variable is the index instead of element for arrays.
* Note: No provision for index as 2nd param.
* Advice - avoid with iterables.


#### 3. for ``of`` - any iterable
* Purpose - iterate over any *iterable*.
* Solves the problem of iterables in ``for in``. Is a generalized ``forEach``.

	// arrays
	for(const ele of [1,2,3])
		console.log(ele);

	// set
	let s = new Set(['H', 'A', 'C', 'K']);
	for(const i of s)
		console.log(i);


* To access array index, run the loop for arr``.entries()``, which is an array of [index, value] 2-arrays. Use destructuring for concise code.

	let s = ['H', 'A', 'C', 'K'];
	for(const i of s.entries())
		console.log(i[1]);
	/*
	H
	A
	C
	K
	*/

	// better - destructuring
	for(const [i, j] of s.entries())
		console.log(i)
	/*
	0
	1
	2
	3
	*/

