const promptInput = document.querySelector(".words");
const imgContainer = document.querySelector(".imgcontainer");
const generateButton = document.querySelector(".know");

async function generateImg() {
  const prompt = promptInput.textContent;

  const response = await fetch("http://localhost:3000/generate-image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: prompt }),
  });

  const data = await response.json();
  const imageUrl = data.data[0].url;

  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;

  imgContainer.innerHTML = "";
  imgContainer.appendChild(imgElement);
}

generateButton.addEventListener("click", generateImg);
