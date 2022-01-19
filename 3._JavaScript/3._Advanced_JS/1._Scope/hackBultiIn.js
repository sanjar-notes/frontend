let console = {
  log: function f(x) {
    globalThis.console.log("Builtin impersonated");
  },
};
function f() {
  console.log(2); // runs global console, before builtin
}

f();
