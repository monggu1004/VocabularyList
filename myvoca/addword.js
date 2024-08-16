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
  getwords.push({ japanese: input1text, korean: input1_1text });
  localStorage.setItem("arrJK", JSON.stringify(getwords));
  JSON.parse(localStorage.getItem("arrJK"));

  addtext(input1text, input1_1text);

  input1.value = "";
  input1_1.value = "";
}

function addtext(japanese, korean) {
  const scrollbox = document.createElement("div");
  scrollbox.classList.add("scrollheight");
  const newwordLine = document.createElement("div");
  newwordLine.classList.add("wordline");
  const newJapaneseword = document.createElement("div");
  newJapaneseword.classList.add("japaneseword");
  newJapaneseword.textContent = japanese;
  const newkoreanmeaing = document.createElement("div");
  newkoreanmeaing.classList.add("koreanmeaning");
  newkoreanmeaing.textContent = korean;
  const newwordContainer = document.querySelector(".wordcontainer");
  const wordlinebox = document.createElement("div");
  wordlinebox.classList.add("wordlinebox");
  const deletebox = document.createElement("div");
  deletebox.classList.add("deletebox");
  const deletebutton = document.createElement("button");
  deletebutton.classList.add("deletebutton");
  deletebutton.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  newwordContainer.appendChild(scrollbox);
  newwordLine.appendChild(newJapaneseword);
  newwordLine.appendChild(newkoreanmeaing);
  wordlinebox.appendChild(newwordLine);
  newwordContainer.appendChild(wordlinebox);
  deletebox.appendChild(deletebutton);
  wordlinebox.appendChild(deletebox);
  newwordContainer.appendChild(wordlinebox);
  deletebutton.addEventListener("click", () =>
    deleteword(wordlinebox, japanese, korean)
  );
}
function deleteword(wordlinebox, japanese, korean) {
  wordbox.removeChild(wordlinebox);

  getwords.splice(japanese, korean);
  getwords = getwords.filter(
    (word) => !(japanese === word.japanese && korean === word.korean)
  );
  localStorage.setItem("arrJK", JSON.stringify(getwords));
}
function showwords() {
  wordbox.innerHTML = "";
  getwords.forEach((word) => {
    addtext(word.japanese, word.korean);
  });
}

window.addEventListener("load", showwords);
formTag.addEventListener("submit", addLS);
