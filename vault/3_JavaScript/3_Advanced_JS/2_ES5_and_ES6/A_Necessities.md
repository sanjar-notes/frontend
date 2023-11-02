# A. Necessities
Created Thursday 25 March 2021

These were necessary features common in other programming languages:
1. let and const - solve hositing and scope problems.
2. arrow functions - solve context binding
3. Template literals - easy string builder, ability to add DSL.

#### 1. let and const
- Both were introduced in ES6.
- Purpose: Very basic feature. Makes JS sensible.
- Both follow the same scoping rules - LEGB.
- Neither can be redeclared, just like C++, Java.
- Use `const` if you want to restrict reassignment.
- Use of `var` is discouraged.

#### 2. Arrow functions
- _Looks_ similar to lamdas(storable functions).
- Purpose: Function(state) Binding. Concise code.
- The de-facto standard for anonymous functions.
- Syntax(can be used in conjunction):

  - For single argument: `p => {};`
  - For single expression as return value: `(p1, p2) => 2*3;`. Returns expression value.
  - For multiliners: `(p1, p2, p3) => { /* code*/ }`. Simple function function.
  - For other combination of cases - use all in conjunction.

  const f = num => num\*2; // single argument, single expression
  f() // call

  // Multiline body - no return
  const f = () =>
  {
  console.log('Hello');
  console.log('World'); // returns undefined
  }

  //Multiline - with return
  const f = (a, b) => {
  a\*2 = b;
  return a+b;
  }; //

  (()=>console.log(2))(); // Arrow function as IIFE

- Important gotcha - arrow functions are not just a syntactic sugar for normal functions, they do more. See [details](this_and_arrow_functions.md).

Note:

- You do need a () for zero params.
- Avoid normal functions for** throwaway **or** one-liner **functions**.**
- Arrow function is short for "arrow function expressions". So these are actually expressions. Expressions don't have declarations, ergo, arrow functions are not hoisted.

#### 3. Template Literals
- Extremely powerful tool.
- Purpose - DSL injection is easier, concise code.
- Template string is a use case of this feature.
- General syntax:
  - Enclose the whole string in backticks.
  - Write literal part verbatim.
  - Use `${ JS_code }` to enclose the code parts.

![](/assets/A_Necessities-image-1.png)
![](/assets/A_Necessities-image-2.png)

- Supports multiline strings.
- Use:

  1.  As template string

  let pname = 'Sanjar', emotion = 'Happy';
  let message = `${pname} is ${emotion}.`;

  console.log(`I am ${pname}`); // prints -> I am Sanjar

2. For carrying JS code.

   `${ console.log(2); }` // prints 2 on string evaluation

   `${ (() => { console.log('Autodestruct sequence intiated'); })() } ` // pretty hacky and dangerous

3. DSL injection(Domain Specific Language)

   p.innerHTML(`<h1> DSL injected </h1>`);

- How it works:
  - `${}`(code) parts are executed normally.
  - Result, i.e. expression/return value of the code is placed as strings in the template literal.
  - The string is ready, to be printed or stored.
