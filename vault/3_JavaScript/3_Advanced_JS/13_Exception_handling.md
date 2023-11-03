# 13. Exception handling
Created Friday 11 March 2022

## Why
To handle exceptions and error, and provide a streamlined flow which segregates code functionality from the exceptional handling code.

## How
JavaScript has a 3 block structure for exception handling. There are 3 possible syntax constructs:
1. `try`...`catch`
2. `try`...`finally`
3. `try`...`catch`...`finally`

### The role of blocks
- `try` - has the functionality code which may lead to errors/exceptions/
- `catch` - this block is executed when an exception is raised in `try`. The block can optionally have an argument that takes the value of the raised exception. `if`...`else` (conditional) code may be used for more granular control of actions according to the type of exception raised, using `instanceof` function. Example of conditonal `catch` block:
	```js
	try {
		myroutine(); // may throw three types of exceptions
	} 
	catch (e) {
	  if (e instanceof TypeError) {
	    // statements to handle TypeError exceptions
	  } else if (e instanceof RangeError) {
	    // statements to handle RangeError exceptions
	  } else if (e instanceof EvalError) {
	    // statements to handle EvalError exceptions
	  } else {
	    // statements to handle any unspecified exceptions
	    logMyErrors(e); // pass exception object to error handler
	  }
	}
	```
- `finally` - this block is always run, irrespective of whether an exception was raised or not.
  
### Return value priority
  If something is returned from the block (s), the whole value evaluates is equal to return value from:
  1. `finally` - highest priority, even if the `catch` itself has more exceptions.
  2. `catch` - If an exception was raised and there's no `finally` (or it does not return anything).
  3. `try` - if there are no exceptions, or if `catch`/`finally` return nothing, or are not defined.

### Nesting of try blocks
`try` blocks may be nested inside each other. 
- If a `try` block does not have a `catch` but raises an error, then the `catch` of the enclosing `try` block handles the exception.


This is not used much, except in code that uses the `async`-`await` syntax.

Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)