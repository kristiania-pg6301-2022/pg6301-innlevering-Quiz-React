import express from "express";

const app = express();

app.get("/api/question", (req, res, next) => {
  res.json({ question: "What was the last thing you read?" });
});

app.post("/api/question", (req, res, next) => {
  res.sendStatus(401);
});

app.use(express.static("public"));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`started on http://localhost:${server.address().port}`);
});
