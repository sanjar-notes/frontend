# 1. Scope
Created Tuesday 14 July 2020

#### Scopes in JS
There are 4 scopes in JS, in order of lookup(during use):
1. **L**ocal scope - block scope, function scope.
2. **E**nclosing scope - inner function's scope.
3. **G**lobal scope - variables/functions at the script level, i.e outside of any class/function. This scope is unique.
4. **B**uilt-in - stuff loaded by the intepreter, like console.log() etc. You can hack it.

![](/assets/1_Scope-image-1.png)
Note:

* **``Root Scope``** - global scope of the browser.

![](/assets/1_Scope-image-2.png)

* Exactly like python3(LEGB), except that writing to outer variable is not restricted.


#### Popular global objects(for the browser)
* ``window`` - browser object. Controls the whole window - manipulate owned tabs, close the browser. This is unique.
* ``document`` - current webpage object. Used for DOM manipulation. Each page has a document object.


Note: Node.js has neither, simply because both window and webpage are irrelevant to an standalone intepreter.

