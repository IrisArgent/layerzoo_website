function toggleMenu() {
  var x = document.getElementById("mainNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
