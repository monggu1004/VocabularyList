const coverjapanese = document.querySelector(".japaneseword");
const covermeaning = document.querySelector(".koreanmeaning");
const coverall = document.querySelector(".wordall");
const japanese = document.querySelector(".japanese");
const korean = document.querySelector(".meaning");

function allcover() {
  coverall.classList.add("coverbutton");
  coverjapanese.classList.remove("coverbutton");
  covermeaning.classList.remove("coverbutton");
  japanese.classList.remove("whiteword");
  meaning.classList.remove("whiteword");
}
function japanesecover() {
  coverall.classList.remove("coverbutton");
  coverjapanese.classList.add("coverbutton");
  covermeaning.classList.remove("coverbutton");
  japanese.classList.add("whiteword");
  meaning.classList.remove("whiteword");
}
function meaningcover() {
  coverall.classList.remove("coverbutton");
  coverjapanese.classList.remove("coverbutton");
  covermeaning.classList.add("coverbutton");
  japanese.classList.remove("whiteword");
  meaning.classList.add("whiteword");
}
coverall.addEventListener("click", allcover);
coverjapanese.addEventListener("click", japanesecover);
covermeaning.addEventListener("click", meaningcover);
