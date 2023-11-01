# 12. Asynchronous JavaScript
Created Monday 15 November 2021

#### Why
For computations that take variable time, like network requests, reading files etc.

#### How
JavaScript is single threaded and non-blocking.
This means that all asynchronous activity must happen in the task queue.

#### What
There are three ways to program asynchronous tasks:

1. Callbacks - runs a function when the async task is done/rejected.
2. Promises - this is an object with a state and a value (assigned on completion of task).
3. Async await syntax - syntax sugar to avoid **then** function chains. Makes code *look* fully sequential.


