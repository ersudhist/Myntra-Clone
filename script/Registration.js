let email = document.getElementById("email");
let password = document.getElementById("password");
let user_name = document.getElementById("user_name");
let login_btn = document.querySelector(".login_btn");

login_btn.addEventListener("click", registerData);

function registerData() {
  if (email.value.length == 0) {
    alert("please Enter Email");
  } else if (password.value.length == 0) {
    alert("please Enter Password");
  } else if (user_name.value.length == 0) {
    alert("please Enter User Name");
  } else {
    loadData(email.value, password.value, user_name.value);
  }
}

async function loadData(email, password, username) {
  let obj = {
    email: email,
    password: password,
    username: username,
  };

  console.log(obj);
  localStorage.setItem("id-details", JSON.stringify(obj));
  alert("Registration Successfull !");
  window.location.href = "../HTML/Login.html";
}
