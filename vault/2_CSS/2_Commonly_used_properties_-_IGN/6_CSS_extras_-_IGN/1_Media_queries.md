# 1. Media queries

Created Tuesday 01 September 2020

Media queries are very useful for responsive devices.
Syntax:
<style>
@media(condition)
{
/_ add valid CSS_/
p{}
h1{}
}
</style>

Some common conditions are:
1. max-width:100px ⇒ 0 to 100px
2. min-width:100px ⇒ 100px to ∞
3. print ⇒ Hide some things when the page is printed
