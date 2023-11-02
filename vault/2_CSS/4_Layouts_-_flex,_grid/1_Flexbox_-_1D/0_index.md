# 1. Flexbox - 1D
Created Tuesday 16 June 2020

#### Why flexbox?
Lay out child elements in a single row/column.

Helps us keep everything at the correct place(in a row or in a column - 1D), without explicit settings.

- Saves us a lot of time, and is responsive.
- We'll not be using the older things like floats.

Two good are:
1. [CSS Tricks - Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/
2. [Flexbox froggy](https://flexboxfroggy.com/) - game to learn flexbox

#### flexbox container (in row mode, the default)
![](/assets/1_Flexbox_-_1D-image-1.png)

#### The axes and controls
The main axis and cross axis have nothing to do with horizontal/vertical.
They are set via the `flex-direction` property, default is row.

- main axis is along the `flex-direction`. Control for main axis is via the `justify-content` property.
- cross axis is perpendicular to main axis. Conrtol for cross axis is via the `align-items` property.

#### There are two kinds of things to control in flex
1. For the flex container - for positioning and laying out space to the flex items
2. For the flex items - for setting their dimensions, optionally overriding container flex properties.

Resource for flex-box: [Learn Flexbox in 15 Minutes](https://youtu.be/fYq5PXgSsbE)
