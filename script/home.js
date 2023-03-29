
let count = 1;
setInterval(function () {
    document.getElementById("radio" + count).checked = true;
    count++;
    if (count > 6) {
      count = 1;
    }
  }, 5000);


  // <link rel="stylesheet" href="../style/home.css">
  //   <link rel="stylesheet" href="../HTML/index.html">
  //   <link rel="stylesheet" href="../style/navbar.css"></link>