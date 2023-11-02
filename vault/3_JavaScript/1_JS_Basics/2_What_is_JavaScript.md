# 2. What is JavaScript
Created Wednesday 08 July 2020

#### Info
- It is a general purpose programming language.
- Created by NetScape in 1995 to run in the browser.
- It was(is?) a feature for the browser.
- Initially, it was not standardised, just like HTML5, CSS3 for different browsers. This became a nightmare for developers.
- It has now been standardized and is called ECMAScript. JavaScript and ECMAScript are used interchangeably.

#### What can JavaScript do
**In the browser**

1. Create, delete or modify any part of a webpage.
2. React to user input: clicks, pointer movements, key presses.
3. Get and set cookies.
4. Save data in the browser's "local storage".
5. Manage requests over the network, but only with the current domain.

**Outside the browser(with `node`)**
Anything.

1. Flying Drones
2. Robotics

![](/assets/2_What_is_JavaScript-image-1.png)

- It can be used for quick development.

#### [What Can't JS do(in the browser)](https://javascript.info/intro#what-can-t-in-browser-javascript-do)
1. Cannot read/write arbitary files to disk, except via the browser's API, that too for upload/download.
2. Different tabs/windows generally do not know about each other. This is called the “Same Origin Policy”. To work around that, both pages must agree for data exchange and contain a special JavaScript code that handles it. **JS can still open new tabs and windows.**
3. No access to OS functions.
4. Limited access to Camera/Microphone, provided explicitly by the user via the browser's API.

- JavaScript's abilities in the browser are limited for the sake user safety. The aim is to prevent an evil webpage from accessing private information or harming the user's data.
- No limits exist if JavaScript is used outside of the browser, e.g via `node`.
- Modern browsers also allow plugin/extensions which may ask for extended permissions.

#### Why use JavaScript
- Single language for both front-end and back-end. Lesser things to learns, lesser tools.
- Quite fast and stable.
- Extremely good libraries and frameworks are available - React, Vue, Express
- Easy to learn.
- Portable.

#### Languages "over" JavaScript
- JS has been implemented in all browser, with most features.
- JS is efficient, but the syntax is not liked by everyone.
- JS is not suitable for complex apps.
- So people created their own languages, which are transpiled to JS.
- Examples:
  1.  CofeeScript - adds "syntactic sugar", making code short and easy to write.
  2.  TypeScript - adds "strict data typing" to make complex systems. By Microsoft.
  3.  Dart - Used for mobile apps, but can transpile to JS. By Google.
  4.  Brython - a Python transpiler. Supports pure Python development.
  5.  Kotlin - modern, concise and safe language that can target the browser or `node`.

#### What is `node`
JavaScript was experimented with and was found to be quite fast. Consequently, the `node` interpreter was developed, for running JS as a general purpose programming language outside of the browser.
