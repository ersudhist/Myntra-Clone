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

