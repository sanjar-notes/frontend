// Facebook has feeds

/*
1. Database - username and passwords
2. newsFeed
3. Sign in form - using prompt, which accepts user input
*/

// list of username and passwords
var database = [
  {
    username: "sanjar",
    password: "pass",
    loggedIn: false,
  },
];

var maxTries = 4;
function login() {
  // document.getElementById("gate").innerHTML = "Clicked";

  // basic function for returning user
  loginAtomic = function () {
    var userNamePrompt = prompt("What's your username?");
    if (userNamePrompt === null) return -2; // cancelled
    var passwordPrompt = prompt("Password");
    if (passwordPrompt === null) return -2; // cancelled
    for (let i = 0, j = database.length; i < j; i++) {
      if (
        database[i].username === userNamePrompt &&
        database[i].password === passwordPrompt
      ) {
        database[i].loggedIn = true;
        document.getElementsByTagName("body")[0].style.backgroundColor = "grey";
        document.getElementById("login").innerHTML = database[i].username;
        document.getElementById("login").disabled ^= 1;
        document.getElementById("logout").disabled ^= 1;

        return i;
      }
    }
    return -1; // wrong input
  };

  // login process
  for (let tries = 0; tries < maxTries; tries++) {
    user = loginAtomic();
    if (user == -2) return user;
    if (
      user === -1 &&
      confirm("Your user name or password is incorrect, try again?")
    )
      continue;
    return user;
  }
  alert("You have exceeded maximum trials, please refersh the page");
  return -1;
}

function logout() {
  if (!confirm("Logout?")) return;
  database[0].loggedIn = false;
  document.getElementsByTagName("body")[0].style.backgroundColor = "white";
  document.getElementById("login").innerHTML = "Login";

  document.getElementById("login").disabled ^= 1;
  document.getElementById("logout").disabled ^= 1;
}

function main() {
  document.getElementById("logout").disabled = true;
}
