// // For all of these, what is the value of a when the function gets called with the alert()
// // #1
// function q1() {
//   var a = 5;
//   if (a > 1) {
//     a = 3;
//   }
//   alert(a);
// }

// //#2 - value changes, a is in globals cope
// var a = 0;
// function q2() {
//   a = 5;
// }

// //A prints 5
// function q22() {
//   console.log(a);
// }

// //#3
// function q3() {
//   window.a = "hello"; // same as doing a = 'hello'
// }

// function q32() {
//   alert(a);
// }
// q3(); q32();
// // window is the root scope, the global scope

// //#4 - a is over shadowed inside, no changes to the global one
// var a = 1;
// function q4() {
//   var a = "test";
//   // alert(a);
// }
// console.log(a);
// //#5 -
var a = 2;
if (true) {
  var a = 5;
  x = 2;
  // console.log(a);
}
console.log(x);
