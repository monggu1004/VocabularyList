const coverall = document.querySelector(".wordall");
const coverjapanese = document.querySelector(".japanese");
const covermeaning = document.querySelector(".meaning");
const japaneseword = document.querySelector(".conversation");
const koreanmeaning = document.querySelector(".words");

function allcover() {
  coverall.classList.add("coverbutton");
  coverjapanese.classList.remove("coverbutton");
  covermeaning.classList.remove("coverbutton");
  japaneseword.classList.remove("whiteword");
  koreanmeaning.classList.remove("whiteword");
}
function japanesecover() {
  coverall.classList.remove("coverbutton");
  coverjapanese.classList.add("coverbutton");
  covermeaning.classList.remove("coverbutton");
  japaneseword.classList.remove("whiteword");
  koreanmeaning.classList.add("whiteword");
}
function meaningcover() {
  coverall.classList.remove("coverbutton");
  coverjapanese.classList.remove("coverbutton");
  covermeaning.classList.add("coverbutton");
  japaneseword.classList.add("whiteword");
  koreanmeaning.classList.remove("whiteword");
}
coverall.addEventListener("click", allcover);
coverjapanese.addEventListener("click", japanesecover);
covermeaning.addEventListener("click", meaningcover);
