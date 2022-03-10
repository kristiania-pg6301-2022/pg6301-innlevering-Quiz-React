import { useLoader } from "./useLoader";
import { fetchJSON } from "./http";
import React from "react";

import { Link } from "react-router-dom";

export function Score() {
  const { data: score } = useLoader(async () => fetchJSON("/quiz/score"));

  return (
    <>
      <h1>Your result</h1>
      {score && (
        <div>
          you have answered {score.correct} correct out of {score.answered}{" "}
          questions
        </div>
      )}
      <div>
        <Link to="/newQuestion">
          <button>Take quiz</button>
        </Link>
        <Link to="/">
          <button>Back home</button>
        </Link>
      </div>
    </>
  );
}
