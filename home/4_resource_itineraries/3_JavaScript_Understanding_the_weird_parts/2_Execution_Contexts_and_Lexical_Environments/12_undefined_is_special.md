# 12. undefined is special
Created Tuesday 1 March 2022
- [ ] in vault

- When variables are "hoisted", they are set to `undefined`. 
- This is therefore a value set by the JavaScript engine.

#### Good practice
So, we should never assign a variable to `undefined` ourselves. This is because it makes it difficult to debug, because `undefined` is supposed to be provided by the JS engine.

Instead, use the keyword `null` if a value needs to be explicitly shown that it does not exist.