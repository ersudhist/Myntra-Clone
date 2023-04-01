function validatePhoneNo(id) {
  let number = document.getElementById(id);
  var phoneno = /^\d{10}$/;
  if (!!number.value && number.value.match(phoneno)) {
    return true;
  } else {
    alert("Enter valid phone number");
    return false;
  }
}

 function continueToOTP() {
    let valid = validatePhoneNo('phone');
    if(valid) {
       localStorage.setItem('loggedInNo', document.getElementById('phone').value);
       window.location.href = './LoginOTP.html'; 
    }
}


