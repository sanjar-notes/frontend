# 1. Intl API
Created Tue Dec 26, 2023 at 12:13 AM

A JS feature that helps generate human friendly strings.
It has parts to work with multiplicity, dates, numbers, time, currency and more.
Very useful and enhances productivity.

Projects usually create their own wrappers (common functions) that use the Intl API to output strings according to the app's design. This saves effort since developers don't need to know intricacies of the Intl API. One off usage is fine if the text is a display exception.

## Starter examples:
```js
const fruits = ['Apple', 'Banana', 'Orange'];
const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });

// `, and` is added
console.log(formatter.format(fruits)); // "Apple, Banana, and Orange"
```
```js
const number = 123456.789;
const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log(formatter.format(number)); // "$123,456.79"
```

```js
const date = new Date();
const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
console.log(formatter.format(date)); // "Tuesday, January 24, 2023"
```

```js
const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
console.log(formatter.format(-3, 'day')); // "3 days ago"
```
## Syntax
There are 4 things:
1. Formatter - created once using the contextual constructor. Example: `ListFormat`, `DateTimeFormat`. The formatter exposes a `.format()` method that we're interested in.
2. Locale - the language/region. Example: `en-US`, `en-IN`
3. Options - configuration. varies according to the chosen sub API. Usually enums.
4. Argument - a string, array, date. The raw thing.


```js
const formatter = new Intl.ListFormat(); // constructor
const renderValue = formatter.format(rawValue); // method invocation
```

## Variations
[Formatters list](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#static_properties)

Common ones are - [DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), [Intl.ListFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat) (for comma separation).

Details TBD