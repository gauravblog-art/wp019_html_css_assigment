function validateForm() {
    var regID = document.getElementById("regID").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var dob = document.getElementById("dob").value;
  
    if (!regID.match(/[0-9]{2}[A-Z]{2}[0-9]{4}/)) {
      alert("Invalid Registration ID");
      return false;
    }
  
    if (/\d/.test(username)) {
      alert("Username should not have any digits");
      return false;
    }
  
    if (!password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/)) {
      alert("Invalid Password");
      return false;
    }
  
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      alert("Invalid Email Address");
      return false;
    }
  
    if (!mobile.match(/[1-9]{1}[0-9]{9}/)) {
      alert("Invalid Mobile Number");
      return false;
    }
  
    if (!dob.match(/[0-9]{8}/)) {
      alert("Invalid Date of Birth");
      return false;
    }
  
    return true;
  }
  