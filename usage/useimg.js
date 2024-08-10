const imgContainer = document.querySelector(".imgcontainer");
const canButton = document.querySelector(".know");
const cannotButton = document.querySelector(".unknow");

async function sendData(text) {
  const response = await fetch("http://localhost:3000/api/create-img", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

async function getImg() {
  let phrase = document.querySelector(".words");
  let response;
  if (phrase) {
    response = await sendData(phrase.textContent);
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
