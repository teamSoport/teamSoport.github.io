window.onscroll = function() {myFunction()};

var navbar = document.getElementById("HeadTop");
// var headerCH = document.getElementById("Headerch")
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    // headerCH.classList.remove("hiddenCH")
  } else {
    navbar.classList.remove("sticky");
    // headerCH.classList.add("hiddenCH")
  }
}
