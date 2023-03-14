# 3. How browsers work
Created Saturday 23 January 2022

## The browser's high level structure
The browser's main components are:
1.  **The user interface**: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
2.  **The browser bridge (engine)**: marshals actions between the UI and the rendering engine.
3.  **The rendering engine** : responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
4.  **Networking**: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
5.  **UI backend**: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
6.  **JavaScript interpreter**. Used to parse and execute JavaScript code.
7.  **Data storage**. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
![[3_How_browsers_work-image-1.png]]


## Code to Display flow
![[3_How_browsers_work-image-2.png]]
![[3_How_browsers_work-image-3.png]]
1. parse HTML --> DOM tree and parse CSS and apply selectors --> CSSOM tree
2. DOM and CSSOM are combined to create "render tree". This contains visible nodes and their height/width and other styles.
3. Layout/Reflow: Layouts (dimensions and coordinates) are calculated.
4. Repaint: Render tree is finally painted using UI backend (connected to OS).
![[3_How_browsers_work-image-4.png]]
The flow of HTML, CSS code to render.

###### Resources used
- [Read - How browsers work](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
- [Reflow and repainting](https://gist.github.com/faressoft/36cdd64faae21ed22948b458e6bf04d5)