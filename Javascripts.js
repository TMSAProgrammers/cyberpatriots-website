// JavaScript Document

function snackbar() {
    // Get the snackbar DIV ew
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


function check(form)
{
 if(form.userid.value == "tmsa" && form.pswrd.value == "cyberpatriots")
  {
    window.location.replace("home.html");
  }
 else
 {
   alert("Wrong login, please try again.");
 }
}
