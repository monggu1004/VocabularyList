const fetchButton = document.querySelector(".know");

async function fetchData() {
  try {
    // 서버의 /api/chat 엔드포인트에 GET 요청을 보냅니다
    const response = await fetch("http://localhost:3000/api/chat");

    // 응답이 정상인지 확인합니다
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // 응답을 JSON으로 파싱합니다
    const data = await response.json();
    console.log(data); // 응답 데이터 콘솔에 출력

    // 결과를 웹 페이지에 표시합니다
    const imgContainer = document.querySelector(".imgcontainer");
    const unknowElement = document.querySelector(".unknow");

    // 데이터 구조에 맞게 수정
    if (data.choices && data.choices.length > 0) {
      imgContainer.innerText = data.choices[0].message.content;
    } else {
      unknowElement.innerText = "No response from API.";
    }
  } catch (error) {
    // 오류 발생 시 콘솔에 출력합니다
    console.error("Error fetching data:", error);
  }
}

// 버튼 클릭 시 fetchData 함수를 호출합니다
fetchButton.addEventListener("click", fetchData);
