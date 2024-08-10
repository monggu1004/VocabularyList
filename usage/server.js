const express = require("express");
const OpenAI = require("openai");
const cors = require("cors");
require("dotenv").config(); // 환경 변수 로드

const app = express();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 환경 변수에서 API 키를 가져옵니다
});

// CORS 설정 (옵션, 다른 도메인에서 요청을 받을 때 필요할 수 있음)
// const cors = require('cors');
// app.use(cors());
app.use(cors());
app.use(express.json());

app.get("/api/chat", async (req, res) => {
  try {
    // OpenAI API 호출
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-4",
    });
    res.json(chatCompletion); // JSON 형식으로 응답 반환
  } catch (error) {
    res.status(500).send(error.toString()); // 에러 발생 시 500 상태 코드와 에러 메시지 반환
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
