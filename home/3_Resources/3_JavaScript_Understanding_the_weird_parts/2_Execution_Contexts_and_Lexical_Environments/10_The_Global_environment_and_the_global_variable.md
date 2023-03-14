# 10. The Global environment and the global object
Created Sunday 20 February 2022
- [ ] in vault

#### Global execution context
- All code in JavaScript is run inside an execution context (or activation record).
- The JavaScript engine always provides a base execution context in the form of a lexically global object.
- All code outside a function is attached to this global object as a name-value pair.
- In the browser, this engine provided global object is named `window`.

#### this keyword
The `this` keyword refers to the current execution context. In case of global code, `this` points (is equal) to `window`.

#### The 4 things for any location
Every location in the code has 4 things associated/accessible with it:
1. Global execution context (GEC). In the browser, this is `window`.
2. Current execution context, referred by `this`.
3. Outer environment (=`null` for the global execution context).
4. The code in the current execution context.

![](10_The_Global_environment_and_the_global_variable-image-1.png)