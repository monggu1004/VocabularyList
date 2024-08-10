const express = require("express");
const OpenAI = require("openai");
const cors = require("cors");
require("dotenv").config();

const app = express(); //왜 다들 변수로 지정해줘야하는걸까 //웹이 아니라 앱이 맞는걸까>그냥 변수일뿐
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
app.use(cors());
app.use(express.json());

const lines


app.get("/api/img", async(req, res) => {

const img = await openai.images.createVariation({model: "dall-e-2", image: buffer, n: 1, size: "1024x1024"});






});
