console.log("sdf");

let todaywordJA = document.querySelector(".todaywordJA");
let todaywordKO = document.querySelector(".todaywordKO");

let todaywords = [
  {
    japanword: "일본어 1",
    koreaword: "한국어 1",
  },
  {
    japanword: "일본어 2",
    koreaword: "한국어 2",
  },
  {
    japanword: "일본어 3",
    koreaword: "한국어 3",
  },
];
console.log("todaywords");

function startword() {
  let todaylength = todaywords.length;
  let randomindex = Math.floor(Math.random() * todaylength);

  todaywordJA.innerText = todaywords[randomindex].japanword;
  todaywordKO.innerText = todaywords[randomindex].koreaword;
}
startword();

document.addEventListener("DOMContentLoaded", startword);
