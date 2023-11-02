# 1. JS Setup
Created Tuesday 14 July 2020

#### **No-setup method**
- Open developer tool aka DevTool, in a browser.
- Write JS in the console

#### **Dedicated setup(in the terminal)**
- JavaScript needs the `node.js` interpreter to run outside the browser.
- Steps for installing node
	1. Install [nvm](https://github.com/nvm-sh/nvm): easy to update/manage node versions. Similar to pyenv.
	2. Install `node` using `nvm` by running `nvm install insert_latest_version --lts`

- `npm`(Node Package Manager) comes bundled with `node`
- check version using `node -v`
- As of Nov 2023, I use React, Express, React Native with Node v16 and they work without problems (so can install `16` if you're afraid of latest).

Note:
- Node is similar to the Python interpreter.
- `node` is used for summoning the JavaScript REPL, at a CLI.
- `npm` is used for installing node(javascript) packages. You don't need it for learning the JavaScript language.