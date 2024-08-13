const formTag = document.querySelector(".form-layout");
const inputClick = document.querySelector(".input2");
const input1 = document.querySelector(".input1");
const input1_1 = document.querySelector(".input1_1");
const japantext = document.querySelector(".japaneseword");
const koreantext = document.querySelector(".koreanmeaning");
const wordbox = documet.querySelector(".wordcontainer");
const wordline = document.querySelector(".wordline");

let words;
let displaywords;
function addLS(event) {
  event.preventDefault();
  const input1text = input1.value;
  const input1_1text = input1_1.value;
  let getwords = JSON.parse(localStorage.getItem("arrJK"));
  getwords.push({ japanese: input1text }, { korean: input1_1text });
  localStorage.setItem("arrJK", JSON.stringify(getwords));
  addtext();
  input1.value = "";
  input1_1.value = "";
}
function addtext() {
  japantext.value = input1;
  koreantext.value = input1_1;
  wordbox.appendChild(wordline);
}

formTag.addEventListener("submit", addLS);
