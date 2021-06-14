function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "username1" && password == "password1"){
    alert ("Login successfully");
    document.location.href = "product.html"
    // window.open("")
    // window.location.href = "./";
      }
      else{
        alert("Invalid username or password");

        }
      return false;
      }