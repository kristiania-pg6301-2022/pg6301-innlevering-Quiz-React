import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FrontPage } from "./components/FrontPage";

function Quiz() {
  const [user, setUser] = useState();
  useEffect(async () => {
    const res = await fetch("api/question");
    setUser(await res.json());
  }, []);
  return <div>{user ? <div>{user.question}</div> : <h1>not found</h1>}</div>;
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path={"/newQuestion"} element={<Quiz />} />
        <Route path={"/result"} element={<h1>hei</h1>} />
        <Route path="/*" element={<h1>Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
