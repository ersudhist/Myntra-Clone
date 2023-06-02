const container = document.querySelector(".container"),
login_btn = document.querySelector("#login_btn"),
email = document.querySelector("#email"),
psswrd = document.querySelector("#password");

login_btn.addEventListener("click", loginData);

function loginData() {
let e = email.value;
let p = psswrd.value;

if (e.length == 0 && p.length == 0) {
    alert("Please fill the input field");
} else if (e.length == 0) {
  alert("Please Enter Email");
}else if (p.length == 0) {
    alert("Please Enter Password");
}else {
  loadData(e, p);
}
}

async function loadData(e, p) {
var result = JSON.parse(localStorage.getItem("id-details"));
if (e == result.email && p == result.password) {
  alert("Login Successfull !");
  window.location.href = "../index.html";
  email.value = "";
  psswrd.value = "";
} else {
  alert("No Account Found! Sign In Again !!");
  email.value = "";
  psswrd.value = "";
}
}
