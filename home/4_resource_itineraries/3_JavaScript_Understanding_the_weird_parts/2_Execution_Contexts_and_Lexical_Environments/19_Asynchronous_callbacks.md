# 19. Asynchronous Callbacks
Created Wednesday 2 March 2022
- [ ] in vault

#### Asynchronous - JS engine vs Browser
"JavaScript is synchrounous and single threaded" - this statement seems naive or wrong. But it's not.

"JavaScript" here refers to the working of the JavaScript engine, not the whole browser. The JavaScript engine talks to the rendering engine for making changes on a webpage and talks with the network part of the browser for intermittent data requests.

The JavaScript engine just places requests at these browser APIs, but still runs single threaded and synchronously.

So, the browser as a whole is asynchronous and multi-threaded.
![](/assets/19_Asynchronous_callbacks-image-1.png)

#### Event loop and queue - the bridge between browser APIs and the JS engine
The browser is aynchronous and multi-threaded, but the JS engine is not. Well, they cannot just work out of the box. There's actually a construct inside the JS engine that makes this combination of browser + JS engine, smooth. This construct has two parts:
1. Event loop
2. Event queue, which has two subparts:
	1. Microtask queue
	2. Callback queue

![](/assets/19_Asynchronous_callbacks-image-2.png)

#### How is the event queue populated and depopulated
- The code from the event queue is run only when the main stack is empty.
- When the main code (in the file) runs, it may use browser APIs for events like clicks and network calls. These are then handled by parts of the browser, but the JS engine continues running code. When thse browser tasks are completed and ready, they get enqueued in the event queue. Then when all the code in the main stack is done and the stack becomes empty, one task from the event queue is added to the stack to be run. Then it finishes, and another task is loaded from the event queue to the stack. This way, everything is finally run and done with.
- It should be noted that stuff like `Promise` and "mutation observers" are kept in the microtask queue, instead of the callback queue. This part of the event queue has a higher priority than the callback queue. So callback queue tasks are inserted and run in the stack only when the microtask queue is empty.
- `setTimeout` and callbacks are kept in the callback queue.

#### The order of code when async elements are involved
Here's an example of the order of execution, main code then callbacks and setTimeouts.
```js
function waitForThreeSeconds () {
	let ms = 3000 + (new Date()).getTime();

	while((new Date()) < ms) {}

	console.log('finished function')
}

function clickHandler() {
	console.log('click event!')
}

document.addEventListener('click', clickHandler);

waitForThreeSeconds();
console.log('finished execution');
```

Result is:
![](/assets/19_Asynchronous_callbacks-image-3.png)
Here, the whole pages kind of freezes for the first 3 seconds, because the main code (i.e. code in stack) is running. Still, click events (if any) are picked up by the browser resources and stored in the event queue. Once the 3 second `while` loop is done, the stack is still not empty, because it needs to call the remaining main code(the "finished function code" `console.log`). Only after this is executed does the stack become empty. Once the main stack is empty, the click event's callbacks are pushed into the stack to execute. This is the order of code.
