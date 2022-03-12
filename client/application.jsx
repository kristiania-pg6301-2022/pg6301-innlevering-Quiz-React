import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FrontPage } from "./components/FrontPage";
import { QuizApp } from "./QuizApp";
import { Score } from "./score";

export function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path={"/newQuestion"} element={<QuizApp />} />
        <Route path={"/result"} element={<Score />} />
        <Route path="/*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
