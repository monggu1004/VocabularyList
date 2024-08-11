const imgContainer = document.querySelector(".imgcontainer");
const canButton = document.querySelector(".know");
const cannotButton = document.querySelector(".unknow");
let japantext = document.querySelector(".words");

document.addEventListener("DOMContentLoaded", function () {
  async function sendData(text) {
    const response = await fetch("http://localhost:3000/api/create-img", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    return response.json();
  }

  async function getImg() {
    let response;
    if (japantext) {
      response = await sendData(japantext.textContent);
      console.log(japantext.textContent);
    }
    if (response && response.url) {
      addImg(response.url);
    }

    function addImg(url) {
      if (url) {
        imgContainer.innerHTML = `<img src="${url}" alt="create img">`;
      }
    }
  }
  canButton.addEventListener("click", getImg);
});
