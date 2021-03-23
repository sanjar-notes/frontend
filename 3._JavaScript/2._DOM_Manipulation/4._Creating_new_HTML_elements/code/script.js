// 1. get the input from the input area
// 2. create an li element
// 3. change li elements content to be the input
// 4. attach li element to the ul element in DOM

// caching is very important
var inputArea = document.getElementById("userinput"); // cached
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function addItem(event) {
  if (event.which === 13 || event.which === 1) {
    var newItem = inputArea.value; // 1 string is the value from the input
    if (newItem.length > 0) {
      var li = document.createElement("li"); // 2 created an li element in the creation space
      li.appendChild(document.createTextNode(newItem)); // 3 adds the content to the li object
      ul.appendChild(li); // 4 attach the element to the ul element
      inputArea.value = ""; // strings are not referenced
    }
  }
}

// the eventListener passes the event as argument to the function automatically
button.addEventListener("click", addItem);
inputArea.addEventListener("keypress", addItem);
