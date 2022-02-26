# 2. Closures
Created Thursday 25 March 2021

#### Why
- Many a times, functions need to have some state. This is done using `static` variables in `C++`.
- **This construct of a function and it's state, is called a closure.**
- Closures help in avoiding global variables.

#### How
- Create some variables and a function in a scope. Then store the function in a variable, by returning the function in the scope. This "stored" function is a closure.
- One can also have a closure generator, i.e. a factory of "functions with a state".
- State is saved in heap memory, and is freed when the variable storing the function goes out of scope.

Example - counter without a global variable, using closure.
```javascript
let Base = function () {
	let counter = 0;
	return function () { 
		counter+=1; 
		console.log(counter);
	} // returns function + "state" (outer variables)
}

let add = Base(); // closure instance created
add() // 1
add() // 2
add() // 3

// We can have more closures too.
let plus = Base();

console.log(plus === add) // false, closure instances are different
```

#### What
Closure is just a "saved instance" (state) of the outer lexical environment. But how far (upwards) does it save. Let's have a look at scopes for a function, and it's availablity:
1. Global scope - yes, due to Global section of code.
2. Local scope - yes, due to stack memory.
3. Outer function (s) - yes, due to closure - their instance is "saved" to heap memory.
	1. One outer function - yes, due to closure.
	2. More outer functions - yes, due to closure.
4. Inner functions (more deeper than it) - No.

So, a closure has access to values from "all outer" scopes, although the closure part is only outer variables (whose instance is saved to heap), till the global depth.

###### Is closure created only for the available function?
Yes
```javascript
function Base()
{
	let counter = 0;

	function f()
	{
		counter += 1000;
		console.log(counter);
	}

	function g()
	{
		counter += 1;
		console.log(counter);
	}
	return g;
}

let add = Base(); // Closure created: g and counter present, f is absent
```
Here closure is created only for `g`, and not `f`, because f goes out of scope upon executing the return statement.

Also, this is the reason event handlers are always closures, because the `addEventListener` is like a return statement, i.e. it makes the function available to other location, hence saves the state.
