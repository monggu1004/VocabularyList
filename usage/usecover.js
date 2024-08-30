const clear = document.querySelector(".clear");
const fail = document.querySelector(".fail");

function clearcover() {
  clear.classList.add("coverbutton");
  fail.classList.remove("coverbutton");
}
function failcover() {
  clear.classList.remove("coverbutton");
  fail.classList.add("coverbutton");
  showfailbox();
}
let saveds = JSON.parse(localStorage.getItem("saveword"));

clear.addEventListener("click", clearcover);
fail.addEventListener("click", failcover);
