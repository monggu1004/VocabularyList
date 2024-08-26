let quizcontent;

quizcontent = JSON.parse(localStorage.getItem("arrJK"));

let quizcontentleng;

let randomcontent;

const playbutton = document.querySelector(".playbutton");
let selectkorean;
let selectjapanese;
let japaneseindex;
let koreanindex;
function randomjk() {
  quizcontentleng = quizcontent.length;
  japaneseindex = Math.floor(Math.random() * quizcontentleng);

  selectjapanese = quizcontent[japaneseindex].japanese;

  const minindex = Math.max(0, japaneseindex - 2);
  const maxindex = Math.min(quizcontentleng - 1, japaneseindex + 2);
  koreanindex = Math.floor(Math.random() * (maxindex - minindex)) + minindex;
  selectkorean = quizcontent[koreanindex].korean;

  console.log(selectjapanese);
  console.log(selectkorean);
}
playbutton.addEventListener("click", randomjk);
