import express from "express";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express(); //왜 다들 변수로 지정해줘야하는걸까 //웹이 아니라 앱이 맞는걸까>그냥 변수일뿐
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
//post는 리소스를 생성, 변경하기위해 설계되었음. 따라서 전송해야할 데이터를 body에 담아 전송.

app.post("/api/create-img", async (req, res) => {
  const { text } = req.body;

  const response = await openai.images.create({
    prompt: text,
    n: 1,
    size: "1024x1024",
  });

  res.json(response.data);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
