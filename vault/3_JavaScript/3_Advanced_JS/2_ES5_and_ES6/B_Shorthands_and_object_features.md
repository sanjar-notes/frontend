# B. Shorthands and object features
Created Thursday 25 March 2021

#### 1. Destructuring(object/iterable unpacking)
- A very nice feature. Very popular. Inspired from python3.
- Purpose: Concise code.
- Works with:
  - Iterables - Intialize variables using an iterable rvalue. Skipping is allowed, order(L to R) is maintained.
  - Object - Declare and intialize variables(set to field-variableName corresponding value). **Order** does not matter. Works for deeply nested fields too. See [this](https://www.w3schools.com/react/tryit.asp?filename=tryreact_es6_destructuring_object2).
- Syntax - iterable/object as **rvalue**. Literals are OK too.
  - Iterable - `const [x, y, z] = new Set([1, 2, 3, 4]);`
  - Object - `let {name,place='Default'} = myObj; // myObj = {name:'Sanjar', place:'Earth', era:'Phanerozoic'};`
- Features in destructuring
  - Default value for fields - `let {name, place='India'} = myObj; // in case myObj doesn't have a 'place' field`
  - Skip selected values - `let [x, , y, , z] = [1, 2, 3, 4, 5]; // 2 and 4 are unused`
  - Skip extraneous values - `let [x, y] = [1, 2, 3, 4]; // 3 and 4 ignored`
  - Alias destructuring - `let {name: c} = {name:'Sanjar};'` creates a variable of name 'c' and gives it the value for key 'name'.
  - Note: Spread operator is not meant for skipping.
- Other uses:
  1.  Swap variables - `[a, b] = [b, a]`
  2.  Outside functions
	```js
	const { name, place } = personObj;
	// use name and place
	```
  3. Functions taking an object argument
	```js
	function f({ name, place }) {
	// OK
	console.log(place, name);
	}
	
	f(personObj); // OK
	```

- Is destructuring worth it - [./destructuringCode.js](destructuringCode.js)
- [More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Ignoring_some_returned_values) at MDN
#### 2. Dynamic fieldnames - Existing object value as field name

- Use existing object's value as field name, actually its string equivalent.
- Purpose: Have dynamic fieldnames, decided at runtime.
- Creating the property: \[personObject] instead of fieldName.
	```js
	let a = [1, 2], b = 'bingo';
	let z =
	{
	[a]: 1 ,
	[b]: 2
	}
	// { '1,2':1, 'bingo':2 } object created
	```
- Accessing the property syntax: z\[a]
	![](/assets/B_Shorthands_and_object_features-image-1.png)
	![](/assets/B_Shorthands_and_object_features-image-2.png)

- Gotchas
  - String equivalent of a list is a flattened list. For example: String equivalent of `[1, 2]` and `[1, [2]]` are identical.
  - Avoid using plain `Object`'s as field equivalent. It's vague.
  - Name of the variable is irrelevant.
- How does this work?
  - It's pretty simple - Any fieldname/key/property must be a `string` in JS, and all objects have a string equivalent.
  - So there are 3 equivalent ways for `creating fields`, all making the same field:
    1. Use a name - old way. Like this: `{ name: 'Sanjar' }`
    2. Use a string - in quotes. Like this: `{ 'name': 'Sanjar' }`
    3. Use \[existingObject] to set string equivalent as fieldname. Like so: `{ [nameObject]: 'Sanjar' };`
  - And so there are three equivalent ways to access field values:
    - `Person.name` - just the name, no quotes no brackets.
    - `Person['name']` - using strings within brackets.
    - `Person[nameObject]` - finds a field matching the string equivalent of namedObject.

#### 3. Object literal shorthand - use variable as fieldName and value
- Use an existing variable to specify both the fieldName and value in an object literal.
- What happens: variable name becomes field name. Variable value becomes field value.
- Purpose: Concise code. [See](https://www.youtube.com/watch?v=HF0PN1vHsSY).
- Syntax: Just include the variable, like element of an array.

![](/assets/B_Shorthands_and_object_features-image-3.png)
![](/assets/B_Shorthands_and_object_features-image-4.png)

- Note: This feature has nothing to do with dynamic field names, as seen earlier.

#### 4. Shorthand method names
- Directly add function to object literal.
- Purpose - Concide code
- Syntax

```js
// old way
const cashier = 
{
	name: 'Will',
	calculateWorth: function() {
	/_code_/
	},
}

// shorthand
const cashier = 
{
	name: 'Will',
	calculateWorth() {/_code_/}
}

// both are identical
```
