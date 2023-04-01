import { navbar } from "../script/navbar.js";

let header = document.getElementById("Home-headerEl");
header.innerHTML = navbar();

let counter = 1;
setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 6) {
      counter = 1;
    }
  }, 5000);

const cartCountInfo = document.getElementById("cart-count-info");
let count = JSON.parse(localStorage.getItem("cart"));
cartCountInfo.textContent = count.length;


  const users = [
    {
      phone: '7778889999',
      role: 'admin',
      password: '7778889999',
      email: "admin@gmail.com",
    },
    {
      phone: '1234567890',
      role: 'user',
      password: '1234567890',
      email: "user@gmail.com",
    },
  ];

  if(localStorage.getItem('users')  == null) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  // <link rel="stylesheet" href="../style/home.css">
  //   <link rel="stylesheet" href="../HTML/index.html">
  //   <link rel="stylesheet" href="../style/navbar.css"></link>
