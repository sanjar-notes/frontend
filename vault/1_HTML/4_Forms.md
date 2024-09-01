# 4. Forms

Created Tuesday 01 September 2020

FIXME why, how and what of `<form>`

### Major form tags

1. Form - `<form>\</form>` - encloses the whole form, provides keyboard interaction and accessibility out-of-the-box (compared to free `input` elements).
2. Field - `<input type />`. Works as text input, number input, checkbox, radio, file upload, date input etc.
3. Field label - `<label for="x"></label>` - used before/after/enclosing an input, the value displayed. Non-optional for checkbox clickability. The `for` value is the same as `<input id/>` value.
4. Dropdown - `<select> <option value="" selected></option><option value=""></option></select>` elements - the components of a dropdown.
5. Searchable dropdown - use `datalist` instead of `select` for surrounding `option`s, and connect `datalist` to a field with `list` attribute `<input list="dataListId" />`. Code example:

   ```html
   <label for="browser">Choose your browser from the list:</label>
   <input list="browserDropdown" name="browser" id="browser" />

   <datalist id="browserDropdown">
     <!-- datalist instead of select for surrounding option-->
     <option value="Edge"></option>
     <option value="Firefox"></option>
     <option value="Firefox2"></option>
     <option value="Chrome"></option>
     <option value="Opera"></option>
     <option value="Safari"></option>
   </datalist>
   ```

   <label for="browser">Choose your browser from the list:</label>
   <input list="browserDropdown" name="browser" id="browser">

   <datalist id="browserDropdown">
     <option value="Edge">
     <option value="Firefox">
     <option value="Firefox2">
     <option value="Chrome">
     <option value="Opera">
     <option value="Safari">
   </datalist>

### kv pairs - `name` and `value` attributes

- name - Each form element must have a name.
- value - current value of the tag. For us it means initial value. Set to empty string usually. Can be skipped.
- name-value are passed as key-value pairs to the server on submission.

```html
<input type="_non-text_" name="" value="" />
```

<input type="text" name=""> <!-- value typed by the user -->

### `<input />` tag attributes

1. name
2. value (omit if text)
3. type - text (default), number, email, checkbox, radio, file
4. required - boolean attribute. Omit if optional input.
5. optional attributes - become relevant for certain `type`s.

### `<input type=""/>` values

1. `text` - placeholder + max-length
2. `submit` - submit button
3. `checkbox` - name + value + input.id+label.for for additive linking. `checked` for specifying default value.
4. `radio` - name + value + input.id+label.for additive linking. `checked` for specifying default value.
5. `button` - title + value
6. `text` - placeholder + max-length
7. `password`
8. `date`
9. `file`
10. `color`
11. `pattern` - regex expression. Standard symbols, i.e. \[a-z], \[0-9], \*, \+
12. `reset` - value

Note:

- In `radio` and `checkbox`. `checked` attribute for specifying default value (maid: since `value` is a server value not state), its also not the state though, just initial value. _There is no state attribute_.

### `<form></form>` attributes

- Form tag has 2 attributes
  1.  `action="url_to_submit_data_to"` will be triggered when submit is clicked. Default value is the same as current URL.
  2.  `method= "GET" | "POST"` - POST is more secure. Default is GET.
- For SPA's like React or even for vanilla JS web apps, neither of the above are useful. instead the `onsubmit` attribute (event handler) is useful. The form data is available as a param here, but care must be taken to prevent default behavior of navigating on submit

  ```html
  <form onsubmit="spaSubmitHandler"></form>

  <script>
    function spaSubmitHandler(event) {
      // disables default HTML behavior of navigation on submit
      event.preventDefault();

      event.target.value.firstName; // value of input name="firstName"
    }
  </script>
  ```

## Various input types
### Radio - `<input type="radio" />`

- idea: select one value from a given list of values
- Syntax: `<input type="radio" />`
- same `name` - All radio elements of the same purpose will have the same `name`
- Labels act as extra CTAs if set up properly (label.for and input.id). No need of nesting.
- Output (input to server) is `name: value`

```html
<!-- Simplest, but there are no labels-->
<!-- Name is the same since only one pair will be formed-->
<!-- `checked` means default selection. it's optional -->
<input type="radio" name="gender" value="male" checked />
<input type="radio" name="gender" value="female" />
<input type="radio" name="gender" value="other" />
```

```html
<!-- Practical, has labels-->
<!-- Label becomes a CTA too - by adding labels properly (label.for and input.id), clicking the label also triggers the radio, there's no need to click the radio itself exactly-->
<label for="maleLabel">Male</label>
<input type="radio" name="gender" value="male" checked id="maleLabel" />

<label for="femaleLabel">Female</label>
<input type="radio" name="gender" value="female" id="femaleLabel" />

<label for="otherLabel">Other</label>
<input type="radio" name="gender" value="other" id="otherLabel" />
```

### Checkbox - `<input type="checkbox" />`

- idea: select multiple values a given list of values
- Syntax: `<input type="radio" />`
- same `name` - All checkbox elements for a single purpose will have the same `name`
- Labels act as extra CTAs if set up properly (label.for and input.id). No need of nesting.
- Output (input to server) is `name: [value1, value2]`

```html
<!-- Simplest, but there are no labels-->
<!-- Name is the same since all have the same purpose (are on the same list) -->
<!-- `checked` means default selection. it's optional -->
<input type="checkbox" name="meal" value="burger" />
<input type="checkbox" name="meal" value="fries" />
<input type="checkbox" name="meal" value="soda" />
```

```html
<!-- Practical, has labels-->
<!-- Label becomes a CTA too - by adding labels properly (label.for and input.id), clicking the label also triggers the radio, there's no need to click the radio itself exactly-->
<label for="burgerLabel">Burger</label>
<input type="checkbox" name="meal" value="burger" checked id="burgerLabel" />

<label for="friesLabel">Fries</label>
<input type="checkbox" name="meal" value="fries" id="friesLabel" />

<label for="sodaLabel">Soda</label>
<input type="checkbox" name="meal" value="soda" id="sodaLabel" />
```


## Form flows
- Create
- Edit - get hold of the form object (an object representing the form state) and set values from the database. [Getting hold of form object without submitting](https://stackoverflow.com/a/39163980/11392807).
## Form validation

FIXME - add basic validation. Note about validation (JS code) in SPAs and how to structure the code.

## File uploads

FIXME add basics about file upload. multi/single. folder upload. JS for custom mimetypes and working with `FormData` construct of browserJS.

## Accessibility principles for form

1. Use the fieldset tag to enclose `option` tags.
2. Use the legend tag to ask the question inside the [fieldset](https://www.freecodecamp.org/learn/responsive-web-design/applied-accessibility/wrap-radio-buttons-in-a-fieldset-element-for-better-accessibility).
