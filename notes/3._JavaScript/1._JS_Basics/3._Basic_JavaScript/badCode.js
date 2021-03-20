function f1() {
  if (false) {
    var x = 2;
    // hoisted to function scope, because
    // var doesn't have block scope.
  }
  console.log(x); // x has been declared, but not initialized
  // prints undefined
}
f1();

function f2() {
  if (false) {
    let x = 2;
    // hoisted to block
  }
  console.log(x); // Error: x not defined
}
// f2();

// Both are examples of bad code.
// But f1 is worse.
