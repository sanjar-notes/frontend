# 3. background-image
Created Monday 15 June 2020

### Syntax

```css
body {
  background-image: url("paper.gif"); /* url('path-to-image') */
}
```

- See to it that the background doesn't make the text unreadable

### Variations

1. Prevent repeating - background-image repeats an image both horizontally and vertically, to control this use:
   ```css
   body {
   	background-image: url("something");
   	background-repeat: repeat-x; /* or repeat-y or no-repeat */*
   }
   ```
2. Specify the position:
   ```css
   body {
     background-image: url(something);
     background-attachment: fixed; /*scroll, background does not change*/
   }
   ```
3. Fill value - `background-size: cover | fill` etc.
