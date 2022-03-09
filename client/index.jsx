import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FrontPage } from "./components/FrontPage";
import { QuizApp } from "./QuizApp";

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path={"/newQuestion"} element={<QuizApp />} />
        <Route path="/*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
