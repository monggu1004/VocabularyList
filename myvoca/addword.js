const formTag = document.querySelector(".form-layout");
const inputClick = document.querySelector(".input2");
const input1 = document.querySelector(".input1");
const input1_1 = document.querySelector(".input1_1");
const japantext = document.querySelector(".japaneseword");
const koreantext = document.querySelector(".koreanmeaning");
const wordbox = document.querySelector(".wordcontainer");
const addpage = document.querySelector(".addpage");
let getwords = JSON.parse(localStorage.getItem("arrJK")) || [];
let words;
let displaywords;

function addLS(event) {
  event.preventDefault();
  const input1text = input1.value;
  const input1_1text = input1_1.value;
  getwords = JSON.parse(localStorage.getItem("arrJK"));
  getwords.push({ japanese: input1text, korean: input1_1text });
  localStorage.setItem("arrJK", JSON.stringify(getwords));

  addtext(input1text, input1_1text);
}

function addtext(japanese, korean) {
  const newwordContainer = document.createElement("div");
  newwordContainer.classList.add("wordcontainer");
  const newwordLine = document.createElement("div");
  newwordLine.classList.add("wordline");
  const newJapaneseword = document.createElement("div");
  newJapaneseword.classList.add("japaneseword");
  newJapaneseword.textContent = japanese;
  const newkoreanmeaing = document.createElement("div");
  newkoreanmeaing.classList.add("koreanmeaning");
  newkoreanmeaing.textContent = korean;
  const wordlinebox = document.createElement("div");
  wordlinebox.classList.add("wordlinebox");
  const deletebox = document.createElement("div");
  deletebox.classList.add("deletbox");
  const deletebutton = document.createElement("button");
  deletebutton.classList.add("deletebutton");
  deletebutton.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  newwordLine.appendChild(newJapaneseword);
  newwordLine.appendChild(newkoreanmeaing);
  wordlinebox.appendChild(newwordLine);
  newwordContainer.appendChild(newwordLine);
  deletebox.appendChild(deletebutton);
  newwordContainer.appendChild(deletebox);
  addpage.appendChild(wordlinebox);
}

// deletebutton.addEventListener("click", removeword);
// function removeword() {
//   wordbox.removeChild(newWordContainer);
//   getwords = getwords.filter(
//     (word) => !(word.japanese === japanese && word.korean === korean)
//   );
//   localStorage.setItem("arrJK", JSON.stringify(getwords));
// }

formTag.addEventListener("submit", addLS);
window.addEventListener("load", () => {
  getwords.forEach((element) => {});
});
