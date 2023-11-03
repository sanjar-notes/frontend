# 3. some and every
Created Thursday 25 March 2021


* Purpose - concise code.
* Given a criteria and an array, there are 3 possibilities. The criteria holds for:
	1. *every* element
	2. *some* element
	3. no element - same as **not(for all)**. Duplicate of 2.
* Consquently, JS has two array methods:
	1. ``every``
	2. ``some``
* About the functions:
	* Syntax: myArray.``every(criteriaFunc(ele, idx){})``. Similarly for ``some``.
	* You can access index as the 2nd param.
	* Working: ``every`` stops at first violation. ``some`` stops at first validation.
	* Time complexity - Θ(n)
	* Both return Boolean.

Example
```js
let nums = [22, 82, 90, 3, 96];

function isEven(a) {	return a%2==0;	}
console.log('All even - ' + nums.every(isEven));
/* output
All even - false
*/

console.log('Atleast one even - ' + nums.some(isEven));
/* output
Atleast one even - true
*/

// Access index
let nums = [22, 82, 90, 19, 96];

console.log(nums.some((a, b) => {
	if(a%2)
		return false;
	console.log(b);
	return true;
}));

/* output
true
3
*/
```
