//-------> PLACE ON TOP Deletes HTML and CSS <-------
for (
  let i = 0 * (document.body.innerHTML = ""),
    head = document.head.children,
    j = head.length;
  i < j;
  i++
)
  if (head[i].tagName === "LINK") head[i].setAttribute("href", "");
//-------End Snippet-------

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randColor() {
  return (
    "rgb(" +
    getRndInteger(0, 255) +
    ", " +
    getRndInteger(0, 255) +
    ", " +
    getRndInteger(0, 255) +
    ")"
  );
}

function linear_grad(n = 0) {
  let dir;
  if (n == 0) dir = "to left";
  else dir = "to right";
  return (
    "background: linear-gradient(" +
    dir +
    ", " +
    randColor() +
    ", " +
    randColor() +
    ", " +
    randColor() +
    ");"
  );
}

// create the boxes
function boxes(n) {
  if (n <= 0) return;
  let ul = document.createElement("ul");
  document.body.appendChild(ul);
  let ret = new Array(n);
  for (let i = 0; i < n; i++) {
    ret[i] = document.createElement("button"); //button created

    // content
    ret[i].innerHTML = "0"; // initial count zero
    // styling
    ret[i].setAttribute(
      "style",
      "padding: 20px; margin:10px; content-align:center; font-size:15px; border-radius:20%;" +
        linear_grad(0)
    );
    ul.appendChild(ret[i]); //added to list
    ret[i].addEventListener("click", function () {
      ret[i].innerHTML = Number(ret[i].innerHTML) + 1;
    });
  }
}

boxes(20);
