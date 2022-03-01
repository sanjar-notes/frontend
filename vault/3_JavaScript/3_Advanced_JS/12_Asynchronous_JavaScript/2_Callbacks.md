# 1. Callbacks
Created Monday 15 November 

#### Definiton of a callback
When a function takes in another function as argument and runs it when a certain condition is met.
This function passed as argument is called a *callback function*.

#### Problems with using callback functions
1. Code becomes ugly and unmanageable. Like a Pyramid, of "doom".
```js
movePlayer(100, 'Left', function() {
	movePlayer(400, 'Left', function() {
		movePlayer(10, 'Right', function() {
			movePlayer(330, ‘'Left', function() {
			});
		});
	});
});
```
2. Error handling is also very difficult, as more indented ``try-catch`` blocks will be needed, for each callback.

#### Conclusion
Callbacks are good for short tasks, but not for long asynchronous tasks.

