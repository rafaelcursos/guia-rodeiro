/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function abreMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }