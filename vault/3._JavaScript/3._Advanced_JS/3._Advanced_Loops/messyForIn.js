const digits = [3.14, 2.71]; // iterabe

// Pifall 1 -----------------
// for (const index in digits) {
//   console.log(index); // accesses index instead of elements
// }

/* Output 1
0
1
*/

// Pitfall 2 ---------------
// Array.prototype.decimalfy = () => {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = this[i].toFixed(2);
//   }
// };

// for (const index in digits) {
//   console.log(index); // accesses extraneous fields
// }
