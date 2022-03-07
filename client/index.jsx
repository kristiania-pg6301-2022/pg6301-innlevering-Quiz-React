import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { isCorrectAnswer, randomQuestion } from "../server/questions";
import { FrontPage } from "./components/FrontPage";

function ShowQuestion({ question, onAnswer }) {
  return (
    <>
      <h1>{question.question}</h1>
      {Object.keys(question.answers)
        .filter((a) => question.answers[a])
        .map((a) => (
          <p key={a}>
            <button onClick={() => onAnswer(a)}>{question.answers[a]}</button>
          </p>
        ))}
    </>
  );
}

function Quiz() {
  const [question, setQuestion] = useState(randomQuestion());
  const [answer, setAnswer] = useState();

  function handleRestart() {
    setQuestion(randomQuestion());
    setAnswer(undefined);
  }

  if (answer) {
    return (
      <ShowAnswerStatus
        question={question}
        answer={answer}
        onRestart={handleRestart}
      />
    );
  }

  return <ShowQuestion question={question} onAnswer={setAnswer} />;
}

function ShowAnswerStatus({ answer, onRestart, question }) {
  return (
    <>
      <h1>{isCorrectAnswer(question, answer) ? "Right" : "Wrong"}</h1>
      <p>
        <button onClick={onRestart}>Another question</button>
      </p>
    </>
  );
}

function ShowResult() {
  return <h1>Your score</h1>;
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path={"/newQuestion"} element={<Quiz />} />
        <Route path={"/result"} element={<ShowResult />} />
        <Route path="/*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
