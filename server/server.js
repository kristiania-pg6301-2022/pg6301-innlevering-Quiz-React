import express from "express";
import * as path from "path";

import { isCorrectAnswer, Questions, randomQuestion } from "./questions.js";

const app = express();

app.get("/api/question", (req, res, next) => {
  res.json({ question: "What was the last thing you read?" });
});

app.get("/question/random", (req, res) => {
  const question = randomQuestion();
  res.json(question);
});

app.post("/api/question", (req, res, next) => {
  res.sendStatus(401);
});

app.use(express.static(path.resolve("../client/dist")));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`started on http://localhost:${server.address().port}`);
});
