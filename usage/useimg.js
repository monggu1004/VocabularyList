const imgContainer = document.querySelector(".imgcontainer");
const canButton = document.querySelector(".know");
const cannotButton = document.querySelector(".unknow");
let phrase = document.querySelector(".words");

canButton.addEventListener("click", () => {
  setTimeout(() => {
    phrase = document.querySelector(".words");
    if (phrase) {
      sendData(phrase.textContent);
    }
  }, 100);

  async function sendData(text) {
    const response = await fetch("http://localhost:3000/api/data", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
  }

  async function addImg(phrase) {
    const response = await fetch("");
    const data = await response.json();
  }
});

canButton.addEventListener("click");
cannotButton.addEventListener("click");
