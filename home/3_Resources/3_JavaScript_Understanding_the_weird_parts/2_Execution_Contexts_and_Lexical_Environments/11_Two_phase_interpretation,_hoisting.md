# 11. Two phase interpretation, "hoisting"
Created Sunday 1 March 2022

#### The two phases
JavaScript is run in two phases by the JavaScript engine.
The phases are:
1. Creation phase (or "hoisting") - memory is reserved for variables and functions, i.e. they are declared but not defined.
2. Execution phase - here hoisted code is given value and all the code is executed.

Due to "hoisting", this code does not raise an error:
```js
console.log(a);
var a = 2;
```

Some caveats:
1. Function bodies are defined, in addition to being declared during "hoisting", although variables are only declared not defined.
2. When using `let`, using code like the above (i.e. access before definition, due to the fact of "hoisting") results in a `ReferenceError`.

#### What about nested code, how is that hoisted?
Hoisting happens only for the current code level, not for nested code. See [this](https://stackoverflow.com/questions/41249587/confused-about-javascript-hoisting?rq=1). In short, hoisting is minimal (contained to the code level).

#### Sane practice
One should avoid "using" hoisiting to access code at obscure places. It is nice to access code after it has been defined.