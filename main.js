//  // -------------------  Registration-------------------

// var nameInput = document.getElementById("registraionName");
// var emailInput = document.getElementById("registrationEmail");
// var passwordInput = document.getElementById("registrationPassword");
// var registrationError = document.getElementById("registrationError");

// if (nameInput && emailInput && passwordInput) {
//   var signUpBtn = document.querySelector("button");
//   signUpBtn.addEventListener("click", registerUser);
// }

// function registerUser() {
//   var name = nameInput.value;
//   var email = emailInput.value;
//   var password = passwordInput.value;

//   if (name === "" || email === "" || password === "") {
//     registrationError.classList.remove("d-none");
//      registrationError.classList.remove("text-success");
//      registrationError.classList.add("text-danger");
//      registrationError.textContent = "All inputs are required!";
//     return;
//   }

//   var users = []
//    users.JSON.parse(localStorage.getItem("users"));
//    var emailExists = false;

//   for (var i = 0; i < users.length; i++) {
//     if (users[i].email === email) {
//       emailExists = true;
//       break;
//     }
//   }

//   if (emailExists) {
//     registrationError.classList.remove("d-none");
//     registrationError.classList.remove("text-success");
//     registrationError.classList.add("text-danger");
//     registrationError.textContent = "Email already exists!";
//     return;
//   }

//   var newUser = {
//      name: name, 
//      email: email,
//       password: password
//      };

//   users.push(newUser);
//   localStorage.setItem("users", JSON.stringify(users));

//   registrationError.classList.remove("d-none");
//   registrationError.classList.remove("text-danger");
//  registrationError.classList.add("text-success");
//   registrationError.textContent = "Success";
// }

// // ------------------- login -------------------

//  var emailLogin = document.getElementById("emailLogin");
// var passwordLogin = document.getElementById("passwordLogin");
//  var loginError = document.getElementById("loginError");

//  if (emailLogin && passwordLogin) {
//   var loginBtn = document.querySelector("button");
//   loginBtn.addEventListener("click", loginUser);
// }

// function loginUser() {

//   var email = emailLogin.value;
//   var password = passwordLogin.value;

//   if (email === "" || password === "") {
//     loginError.classList.remove("d-none");
//     loginError.textContent = "All inputs are required!";
//     return;
//   }

//   var users =[] 
//   users.JSON.parse(localStorage.getItem("users"));
//   var found = false;
//   var username = "";

//   for (var i = 0; i < users.length; i++) {
//     if (users[i].email === email && users[i].password === password) {
//       found = true;
//       username = users[i].name;
//       break;
//     }
//   }

//   if (found) {
//     sessionStorage.setItem("loggedInUser", username);
//     location.href = "home.html";
//   } else {
//     loginError.classList.remove("d-none");
//     loginError.textContent = "Invalid email or password!";
//   }
// }

// // ------------------- home -------------------

// function checkLogin() {
//   var user = sessionStorage.getItem("loggedInUser");
//   if (!user) {
//     location.href = "index.html";
//   } else {
//     document.querySelector(".welcome h2").textContent = "Welcome " + user;
//   }
// }

 

// function logoutUser() {
//   sessionStorage.removeItem("loggedInUser");
//   location.href = "index.html";
// }

// var logoutBtn = document.querySelector(".logout");
// if (logoutBtn) {
//   logoutBtn.addEventListener("click", function (e) {
//     e.preventDefault();
//     logoutUser();
//   });
// }



 

// ------------------- تسجيل مستخدم -------------------

var nameInput = document.getElementById("registraionName");
var emailInput = document.getElementById("registrationEmail");
var passwordInput = document.getElementById("registrationPassword");
var registrationError = document.getElementById("registrationError");

if (nameInput && emailInput && passwordInput) 
  {
  var signUpBtn = document.querySelector("button");
  signUpBtn.addEventListener("click", registerUser);
}

function registerUser() {
  var name = nameInput.value;
  var email = emailInput.value;
  var password = passwordInput.value;

  if (name === "" || email === "" || password === "") {
 
    registrationError.previousElementSibling.classList.remove("d-none");

    return;

  }

  var users = [] ;

  users=JSON.parse(localStorage.getItem("users")) ;
  var emailExists = false;

  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      emailExists = true;
      break;
    }
  }

  if (emailExists) {
    
    registrationError.classList.remove("d-none")
    return;
  }

  var newUser = {
    name: name,
    email: email,
    password: password
   };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

 
  registrationError.nextElementSibling.classList.remove("d-none")
}

// -------------------  login -------------------

var emailLogin = document.getElementById("emailLogin");
var passwordLogin = document.getElementById("passwordLogin");
var loginError = document.getElementById("loginError");

if (emailLogin && passwordLogin) {
  var loginBtn = document.querySelector("button");
  loginBtn.addEventListener("click", loginUser);
}

function loginUser() {
  var email = emailLogin.value;
  var password = passwordLogin.value;

  if (email === "" || password === "") {
    loginError.classList.remove("d-none");
    return;
  }

  var users = JSON.parse(localStorage.getItem("users")) || [];
  var found = false;
  var username = "";

  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      found = true;
      username = users[i].name;
      break;
    }
  }

  if (found) {
    sessionStorage.setItem("loggedInUser", username);
    location.href = "home.html";
  } else {
    loginError.nextElementSibling.classList.remove("d-none");
  }
}
// ------------------- Home -------------------



 
var username = sessionStorage.getItem("loggedInUser");
document.getElementById("usernameDisplay").textContent = username;

 
var logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", function () {
  sessionStorage.removeItem("loggedInUser");
  location.href = "index.html";
});