const wordlistbox = document.querySelector(".wordlistbox");
const inputbox = document.querySelector(".input");

function savepage() {
  sessionStorage.setItem("inputClick", "true");
}

function getpage() {
  sessionStorage.getItem("inputClick");
}
window.addEventListener("load", getpage);

inputbox.addEventListener("click", savepage);
