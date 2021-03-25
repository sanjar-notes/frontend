/* Without destructuring*/
let prop1 = obj.prop1; // n lines here
// other needed properties
let propn = obj.propn;

/* with destructuring - ES6*/
let { prop1, prop2, /* other needed properties */ propn } = obj;

// Conclusion: Code is very short and clear. Applicable within function definitions also.
