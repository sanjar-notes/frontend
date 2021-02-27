// should get the color from the color pickers and change the background's linear-gradient function
var cssCode = document.createElement("code"); // copy code elemnet
var button = document.createElement("button"); // button to copy the code
button.setAttribute(
  "style",
  "padding:10px 20px; font-size:20px; cursor: grab; border-radius:10px"
);
button.innerText = "Copy!";

cssCode.style.backgroundColor = "grey";
let h3 = document.querySelector("h3");
h3.appendChild(cssCode);
h3.appendChild(document.createElement("br"));
h3.appendChild(document.createElement("br"));
h3.appendChild(button);
cssCode.setAttribute(
  "style",
  "font-size:20px; background: ; padding: 5px 30px; border: 2px solid black;"
);
cssCode.textContent = window
  .getComputedStyle(document.body)
  .getPropertyValue("background-image");
// cssCode.textContent = "background: linear-gradient(to left, orange, blue);";

var bodyStyle = document.body.style; // body style object
var cB1 = document.querySelector(".color1"),
  cB2 = document.querySelector(".color2");

function setGradient(dir = 0) {
  if (dir != 0) dir = "to left, ";
  else dir = "to right, ";

  cssCode.textContent = bodyStyle.background =
    "linear-gradient(" + dir + cB1.value + ", " + cB2.value + ");";
}
console.log(2222);
function copiedMessage() {
  console.log(
    window.getComputedStyle(document.body).getPropertyValue("background")
  );
  // temporary text area for copying text
  (function (elementObjToBeCopied) {
    let tempCopyClipboardTextArea = document.createElement("textarea");
    tempCopyClipboardTextArea.value =
      "value" in elementObjToBeCopied
        ? elementObjToBeCopied.value
        : elementObjToBeCopied.textContent;
    document.body.appendChild(tempCopyClipboardTextArea);
    tempCopyClipboardTextArea.select();
    tempCopyClipboardTextArea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    tempCopyClipboardTextArea.remove();
  })(cssCode);

  // display message
  button.innerText = "Code Copied!";
  setTimeout(function () {
    button.innerText = "Copy!";
  }, 400);
}

// add event listeners for the colors
cB1.addEventListener("input", setGradient);
cB2.addEventListener("input", setGradient);
button.addEventListener("click", copiedMessage);
