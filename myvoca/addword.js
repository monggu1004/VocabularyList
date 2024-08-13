const formTag = document.querySelector(".form-layout");
const inputClick = document.querySelector(".input2");
const input1 = document.querySelector(".input1");
const input1_1 = document.querySelector(".input1_1");

let words;

function addLS(event) {
  event.preventDefault();
  const input1text = input1.value;
  const input1_1text = input1_1.value;
  let getwords = JSON.parse(localStorage.getItem("arrJK"));
  getwords.push({ japanese: input1text }, { korean: input1_1text });
  localStorage.setItem("arrJK", JSON.stringify(getwords));
  input1.value = "";
  input1_1.value = "";
}

formTag.addEventListener("submit", addLS);
