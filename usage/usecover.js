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
function showfailbox() {
  const exist = document.querySelector(".vocaboxdetail");
  if (exist) {
    exist.remove();
    return;
  }
  const newvocabox = document.createElement("div");
  newvocabox.classList.add("vocaboxdetail");

  let fails = [];
  imgContainer.appendChild(newvocabox);
  fails = japanesePhrases.filter((phrase) => {
    return !saveds.some(
      (savedPhrase) =>
        savedPhrase.japantext === phrase.japanese &&
        savedPhrase.koreantext === phrase.korean
    );
  });
  for (let key of fails) {
    let vocaline = document.createElement("div");
    vocaline.classList.add("vocaline");
    newvocabox.appendChild(vocaline);
    let japanesetext = key.japanese || "";
    let koreantext = key.korean || "";
    console.log(koreantext);
    let jvocaline = document.createElement("div");
    jvocaline.classList.add("jvoca");
    vocaline.appendChild(jvocaline);
    jvocaline.innerText = japanesetext;
    let kvocaline = document.createElement("div");
    kvocaline.classList.add("kvoca");
    vocaline.appendChild(kvocaline);
    kvocaline.innerText = koreantext;
  }
  console.log;
}
clear.addEventListener("click", clearcover);
fail.addEventListener("click", failcover);
