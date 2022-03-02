import express from "express"


const app = express();

app.get("/api/question", (req, res, next) => {
    res.json({question: "What was the last thing you read?"});
})

app.post("/api/question", (req, res, next) => {
    res.sendStatus(401);
})

app.listen(3000);