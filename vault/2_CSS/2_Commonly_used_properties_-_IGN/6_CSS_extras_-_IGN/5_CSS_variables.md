# 5. CSS variables

Created Saturday 29 August 2020

- CSS variables are created by us and they can be used to store property values. This is helpful for automation.

1. to declare, and initialize, syntax is

   --variable_name:property_value;

2. to use, just write:

   var(--variable, fallback_value)

e.g
:root{
--bgcolor: red;
--fontcolor: blue;
}
body {
--bgp: red;
background-color: var(--bgp);
}

Note:

- Global declarations must be written inside the special **:root**
- Variables [do](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/inherit-css-variables) have scope in descendents.
- Variables can be reassigned for an element(and consequently in all its elements).
