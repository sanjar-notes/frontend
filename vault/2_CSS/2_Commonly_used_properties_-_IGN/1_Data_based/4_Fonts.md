# 4. Fonts
Created Tuesday 16 June 2020

### which font
- Syntax: `font-family: Menlo, Montserrat, 'Segoue UI', serif;`
- the latter ones are fallbacks if a previous one isn't available.
![](/assets/4_Fonts-image-1.png)
CSS font families:
1. Generic family: serif or monospace or sans-serif
2. font-family: a specific family viz apple, Arial, Times New Roman

Note:
1. For multi-worded families, use quotes (single or double both are OK).
2. More than one fonts can be seperated by commas. Leftmost is used, if available.
3. Sans-serif are considered much easier to read on screens
4. Many fonts are available at sites, like Google Fonts. They provide CSS file links, to be used in the `<link href="" />`.


### Font UI properties
1. `color`: color of the font.
2. `font-size`: kpx; // shouldn't be used for headings, as we have h1 to h6 for them, decreasing.
3. `font-weight`: normal or bold
4. `font-style`: normal, italic or oblique
5. `font-variant`: normal or small caps(makes everything uppercase but height is preserved)