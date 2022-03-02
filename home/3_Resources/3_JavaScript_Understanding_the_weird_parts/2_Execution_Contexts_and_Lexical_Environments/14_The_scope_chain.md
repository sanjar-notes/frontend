# 14. The scope chain
Created Sunday 1 March 2022

Consider this code:
```js
function b() {
	console.log(myVar);
}

function a() {
	let myVar = 2;
	b();
}

let myVar = 1;
a(); // prints 1
```

This code snipper indicates that JavaScript looks for variables not in the current execution context, in the next outer lexical environment and so on.

Note that execution context (activation record) and lexical environment (scope) are two different things.

Of course, one should not write code like this, and keep the declarations above the use.
![](Pasted%20image%2020220302174007.png)