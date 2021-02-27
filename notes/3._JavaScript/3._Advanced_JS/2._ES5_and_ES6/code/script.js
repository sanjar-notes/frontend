const id = Symbol();
const obj = {
  [[1, 2]]: "Script 1",
};

console.log(obj[String([1, 2])]);
