function f1() {
  if (false) {
    var x = 2;
    // x leaks to function scope.
    // x is hoisted
  }
  console.log(x); // x was set to undefined, during hoising.
  // It was never intialized because the codeblock never ran
  // RESULT: prints undefined
}
// f1();

function f2() {
  if (true) {
    let x = 2;
    // stays within the block scope
  }
  console.log(x); // Error: x not defined, because let follows block scope.
  // hoisting works within a scope only.
}
// f2();

function f3() {
  console.log(x); // ReferenceError - x not intialized.
  // Note that you don't get a 'x not defined' error, because of x has been hoisted.
  let x = 2;
}
// f(3);

// All the above are examples of bad code.
// But f1 is worse - most difficult to reason about

/* Correct approach */
function fC() {
  let x;
  if (false) x = 2;
  console.log(x); // prints undefined
}
fC();
